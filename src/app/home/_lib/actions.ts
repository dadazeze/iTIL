"use server";

import { TFormActionState } from "@/app/auth/types/domain";
import { createPost } from "@/services/post";
import { IHomePostParams } from "../types/parameter";

export const createPostAction = async (
  prevState: TFormActionState | null,
  data: FormData,
  extraData: Pick<IHomePostParams, "user_id" | "count">
): Promise<TFormActionState> => {
  try {
    const newData = {
      title: data.get("title") as string,
      keyword: data.get("keyword") as string,
      description: data.get("description") as string,
      img_url: data.get("img_url") as string | null,
    };

    await createPost({ ...newData, ...extraData });

    return {
      status: "success",
      message: "Profile updated successfully",
    };
  } catch (e) {
    return {
      status: "error",
      message: "Profile update failed",
    };
  }
};
