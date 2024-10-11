"use client";

import BottomNavBarUI from "@/shared/components/common/bar/BottomNavBarUI";
import { AvatarUI } from "@/shared/components/common/card/AvatarUI";
import { FormUI } from "@/shared/components/common/form/FormUI";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { TFormActionState } from "@/shared/types/domain";
import { IUserProfileView } from "@/widgets/common/types/view";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { createCommentAction } from "../actions";
import { CommentParams } from "../types/parameter";

interface IProps {
  user?: IUserProfileView;
  postId: number;
}

export default function CommentBottomBarUI({ user, postId }: IProps) {
  const form = useForm<CommentParams>({
    values: {
      content: "",
      post_id: postId,
      user_id: user?.id ?? "",
    },
  });

  const [state, formAction] = useFormState<TFormActionState, FormData>(
    (prevState, data) =>
      createCommentAction(prevState, data, {
        post_id: postId,
        user_id: user?.id ?? "",
      }),
    null
  );

  useEffect(() => {
    console.log(state?.message);
  }, [state]);

  return (
    <BottomNavBarUI className="bg-grayScale-400 h-24 pt-7 pl-5 pr-4 pb-7">
      <div className="flex gap-2">
        <AvatarUI src={user?.avatar_url ?? ""} />
        <FormUI className="space-y-0 w-full" form={form} action={formAction}>
          <div className="flex gap-2">
            <FormUI.Field name="content">
              {(props) => (
                <Input
                  {...props}
                  placeholder="댓글을 입력하세요."
                  type="textarea"
                />
              )}
            </FormUI.Field>
            <Button>등록</Button>
          </div>
        </FormUI>
      </div>
    </BottomNavBarUI>
  );
}
