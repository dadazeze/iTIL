'use client';

import useAlertModal from '@/app/_hooks/modal/useAlertModal';
import usePostModal from '@/app/_hooks/modal/usePostModal';

import { CardUI } from '@/components/common/card/CardUI';
import { createContext } from 'react';
import { experienceLevelItemList, roleItemList } from '../_lib/constants';
import { SelectUI } from '@/components/common/form/SelectUI';
import AlertModalUI from '@/components/common/dialog/AlertModalUI';
import PostModalUI from '@/components/common/post/PostModalUI';

const HeaderContext = createContext<any>({}); // 토요일 설명 듣고 수정

export default function Header() {
  const { isOpen, toggleModal } = usePostModal();
  const { isAlertOpen, onClose, onOpen } = useAlertModal();
  const defaultText = '취소';
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
        <div className='pt-3 pb-3 flex gap-2'>
          <SelectUI itemList={roleItemList} placeholder='직군을 선택하세요' />
          <SelectUI
            itemList={experienceLevelItemList}
            placeholder='경력을 선택하세요'
          />
        </div>
        <div className='flex flex-col gap-2 bg-gray-100'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <CardUI key={item} />
          ))}
        </div>
        <button
          className='bg-required fixed bottom-0 right-0'
          onClick={() => toggleModal()}
        >
          k 임시 글쓰기버튼
        </button>
        {isOpen && (
          <PostModalUI open={isOpen} close={toggleModal} onAlertOpen={onOpen} />
        )}
        {isAlertOpen && (
          <AlertModalUI
            alertContent={'저장 하시겠습니까?'}
            defaultText={'취소'}
            rightText={'확인'}
            isSingleButton={false}
            isAlertOpen={isAlertOpen}
            onClose={onClose}
            onOpen={onOpen}
            onClosePost={toggleModal}
          />
        )}
      </HeaderContext.Provider>
    </div>
  );
}
