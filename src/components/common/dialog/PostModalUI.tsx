"use client";

import TextEditor from "@/app/home/_widgets/list/text-editor/TextEditor";
import RadixIcon from "@/assets/radix-icon";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PostAppBarUI } from "../bar/PostAppBartUI";
import { useFormState } from "react-dom";
import { TFormActionState } from "@/app/auth/types/domain";
import { createPostAction } from "@/app/home/_lib/actions";
import { FormUI } from "../form/FormUI";
import { Input } from "@/components/ui/Input";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  keyword: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  img_url: z.string(),
});

interface IProps {
  userId: string;
}

export default function PostModalUI({ userId }: IProps) {
  const [title, setTitle] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");
  const [contents, setContents] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      keyword: "",
      description: "",
      img_url: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [state, formAction] = useFormState<TFormActionState, FormData>(
    (prevState, data) =>
      createPostAction(prevState, data, { user_id: userId, count: 0 }),
    null
  );

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const changeKeywordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMainKeyword(event.target.value);
  };

  const getContents = (text: string) => {
    setContents(text);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <RadixIcon name="PlusCircledIcon" size={30} />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className="w-full h-full flex items-center justify-center z-[60] bg-white p-0">
          <FormUI form={form} action={formAction}>
            <div className="w-full h-full pb-4 flex flex-col">
              <PostAppBarUI />
              <div className="px-4 mt-5 h-full flex flex-col">
                <DialogTitle className="text-lg font-bold mb-4 mt-[24]">
                  <div className="border-b-2">
                    <FormUI.Field name="title">
                      {(props) => (
                        <Input
                          {...props}
                          placeholder="제목을 입력하세요"
                          className="py-2 px-1 outline-none font-normal w-full text-sm"
                        />
                      )}
                    </FormUI.Field>
                    {/* <input
                      value={title}
                      onChange={changeTitleHandler}
                      type="text"
                      placeholder="제목을 입력하세요"
                      className="py-2 px-1 outline-none font-normal w-full text-sm"
                    /> */}
                  </div>
                  <div className="border-b-2  mt-5">
                    <FormUI.Field name="keyword">
                      {(props) => (
                        <Input
                          {...props}
                          placeholder="#대표 키워드 (i.g #Nextjs)"
                          className="py-2 px-1 outline-none font-normal w-full text-sm"
                        />
                      )}
                    </FormUI.Field>
                    {/* <input
                      value={mainKeyword}
                      onChange={changeKeywordHandler}
                      type="text"
                      placeholder="#대표 키워드 (i.g #Nextjs)"
                      className="py-2 px-1 outline-none font-normal w-full text-sm"
                    /> */}
                  </div>
                </DialogTitle>
                <FormUI.Field name="description">
                  {(props) => (
                    <TextEditor
                      description={props.value}
                      onGet={props.onChange}
                    />
                  )}
                </FormUI.Field>
              </div>
            </div>
            <Button type="submit">sdf</Button>
          </FormUI>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
