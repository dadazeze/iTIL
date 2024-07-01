"use client";

import TextEditor from "@/app/home/_widgets/list/text-editor/TextEditor";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChangeEvent, useState } from "react";
import { Header } from "../bar/HeaderUI";

type Props = {
  open: boolean;
  close: () => void;
  onAlertOpen: () => void;
};
export default function PostModalUI(props: Props) {
  const { open, close, onAlertOpen } = props;
  const [title, setTitle] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const changeKeywordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMainKeyword(event.target.value);
  };

  const clickSaveButtonHandler = () => {
    onAlertOpen();
    // 저장 확인 팝업 -> 확인 시 -> api 통신 (post)
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent className="fixed inset-0 flex items-center justify-center z-[60] bg-white">
            <div className="w-full h-full pb-4 flex flex-col">
              <Header>
                <Header.NewEditPost
                  onSave={clickSaveButtonHandler}
                  onTempSave={clickSaveButtonHandler}
                />
              </Header>
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
                <TextEditor description="" />
              </div>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
