"use client";

import useAlertModal from "@/app/_hooks/modal/useAlertModal";
import usePostModal from "@/app/_hooks/modal/usePostModal";

import { CardUI } from "@/components/common/card/CardUI";

import ModalUI from "@/components/common/dialog/ModalUI";
import { SelectUI } from "@/components/common/form/SelectUI";
import { Button } from "@/components/ui/Button";
import { createContext } from "react";
import { experienceLevelItemList, roleItemList } from "../_lib/constants";
import PostModalUI from "@/components/common/dialog/PostModalUI";

const HeaderContext = createContext<any>({}); // 토요일 설명 듣고 수정

export default function Header() {
  const { isOpen, toggleModal } = usePostModal();
  const { isAlertOpen, onClose, onOpen } = useAlertModal();
  const defaultText = "취소";
  const isSingleButton = false;

  return (
    <div>
      <HeaderContext.Provider
        value={{
          isAlertOpen,
          onClose,
          onOpen,
          toggleModal,
          defaultText,
          isSingleButton,
        }}
      >
        <div className="pt-3 pb-3 flex gap-2">
          <SelectUI itemList={roleItemList} placeholder="직군을 선택하세요" />
          <SelectUI
            itemList={experienceLevelItemList}
            placeholder="경력을 선택하세요"
          />
        </div>
        <div className="flex flex-col gap-2 bg-gray-100">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <CardUI key={item} />
          ))}
        </div>
        <ModalUI
          title="hi"
          trigger={<Button>Modal1</Button>}
          confirmBtn={<Button>Confirm</Button>}
          cancelBtn={<Button>Close</Button>}
        >
          hji
        </ModalUI>
        <ModalUI
          title="hi2"
          trigger={<Button>Modal2</Button>}
          confirmBtn={<Button>Confirm</Button>}
          cancelBtn={<Button>Close</Button>}
        >
          hji2
        </ModalUI>
        <PostModalUI />

        {/* <button
          className="bg-required fixed bottom-0 right-0"
          onClick={() => toggleModal()}
        >
          k 임시 글쓰기버튼
        </button> */}
        {/* {isOpen && (
          <PostModalUI open={isOpen} close={toggleModal} onAlertOpen={onOpen} />
        )} */}
      </HeaderContext.Provider>
    </div>
  );
}
