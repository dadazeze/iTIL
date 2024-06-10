"use client";

import { CardUI } from "@/components/common/CardUI";
import { SelectUI } from "@/components/common/SelectUI";
import { experienceLevelItemList, roleItemList } from "./lib/constants";
import usePostModal from "../_hooks/modal/usePostModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import PostModalUI from "@/components/common/PostModalUI";

export default function Page() {
  const { isOpen, toggleModal } = usePostModal();
  return (
    <div>
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
      <button
        className="bg-required fixed bottom-0 right-0"
        onClick={() => toggleModal()}
      >
        임시 글쓰기버튼
      </button>
      {isOpen && <PostModalUI open={isOpen} close={toggleModal} />}
    </div>
  );
}
