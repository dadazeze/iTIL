"use server";

import { createCommnet } from "@/shared/services/comment";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { TFormActionState } from "../../../shared/types/domain";
import { deleteComment } from "@/shared/services/commentClien";

const formSchema = z.object({
  content: z.string().min(1, {
    message: "값을 입력해주세요.",
  }),
});

export const createCommentAction = async (
  prevState: TFormActionState | null,
  data: FormData,
  extraData: { post_id: number; user_id: string }
): Promise<TFormActionState> => {
  try {
    const newData = {
      content: data.get("content") as string,
      post_id: extraData.post_id,
      user_id: extraData.user_id,
    };

    const input = formSchema.safeParse({
      content: data.get("content"),
    });
    if (!input.success) {
      return {
        status: "error",
        message:
          input.error.flatten().fieldErrors.content?.join("") ??
          "Comment create failed",
      };
    }
    await createCommnet(newData);

    revalidatePath(`/post/${newData.post_id}`);

    return {
      status: "success",
      message: "Comment created successfully",
    };
  } catch (e: unknown) {
    return {
      status: "error",
      message: `Comment create failed ${e.message}`,
    };
  }
};

export const deleteCommentAction = async (
  commentId: number,
  postId: number
) => {
  try {
    await deleteComment(commentId);
    revalidatePath(`/post/${postId}}`);
  } catch (e) {
    console.error(e);
  }
};
