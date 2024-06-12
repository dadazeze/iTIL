"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { MenubarUI } from "./MenuBarUI";
import ReactQuill from "react-quill";
import { useState } from "react";
import TextEditor from "@/app/home/widgets/list/text-editor/TextEditor";

type Props = {
  open: boolean;
  close: () => void;
};
export default function PostModalUI(props: Props) {
  const { open, close } = props;
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogOverlay>
        <DialogContent className="fixed inset-0 flex items-center justify-center z-[60] bg-white">
          <div className="w-full h-full pb-4 flex flex-col">
            <MenubarUI />
            <div className="px-4 mt-5 h-full flex flex-col">
              <DialogTitle className="text-lg font-bold mb-4 mt-[24]">
                <div className="border-b-2">
                  <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
                <div className="border-b-2  mt-5">
                  <input
                    type="text"
                    placeholder="#대표 키워드 (i.g #Nextjs)"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
              </DialogTitle>
              <DialogDescription className="flex-1 mb-4">
                {/* <textarea
                className="w-full h-full py-4 px-1 outline-none resize-none text-sm"
                placeholder="오늘 공부한 내용을 작성하세요. 단 한줄도 괜찮아요 :)"
              /> */}
                <TextEditor />
              </DialogDescription>
              <button className="self-end btn" onClick={() => close()}>
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
