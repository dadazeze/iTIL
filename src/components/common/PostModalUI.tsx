"use client";

import { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { MenubarUI } from "./MenuBarUI";
import ReactQuill from "react-quill";
import TextEditor from "@/app/home/widgets/list/text-editor/TextEditor";

type Props = {
  open: boolean;
  close: () => void;
};
export default function PostModalUI(props: Props) {
  const { open, close } = props;
  const [title, setTitle] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {};

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
                    value={title}
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
                <div className="border-b-2  mt-5">
                  <input
                    value={mainKeyword}
                    type="text"
                    placeholder="#대표 키워드 (i.g #Nextjs)"
                    className="py-2 px-1 outline-none font-normal w-full text-sm"
                  />
                </div>
              </DialogTitle>
              <DialogDescription className="flex-1 mb-4">
                <TextEditor description="" />
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
