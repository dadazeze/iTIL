"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useState } from "react";
import { PostAppBarUI } from "../bar/PostAppBartUI";
import RadixIcon from "@/assets/radix-icon";
import TextEditor from "@/app/home/_widgets/list/text-editor/TextEditor";

export default function PostModalUI() {
  const [title, setTitle] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");
  const [contents, setContents] = useState("");

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
          <div className="w-full h-full pb-4 flex flex-col">
            <PostAppBarUI />
            <div className="px-4 mt-5 h-full flex flex-col">
              <DialogTitle className="text-lg font-bold mb-4 mt-[24]">
                <div className="border-b-2">
                  <input
                    value={title}
                    onChange={changeTitleHandler}
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
                <div className="border-b-2  mt-5">
                  <input
                    value={mainKeyword}
                    onChange={changeKeywordHandler}
                    type="text"
                    placeholder="#대표 키워드 (i.g #Nextjs)"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
              </DialogTitle>
              <TextEditor description={contents} onGet={getContents} />
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
