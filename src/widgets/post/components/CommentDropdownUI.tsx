'use client'

import RadixIcon from '@/assets/radix-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '../../../shared/components/ui/dropdown-menu';
import { useFormState } from 'react-dom';
import { deleteComment } from '@/shared/services/commentClien';
import { deleteCommentAction } from '../actions';

interface IProps {
  commentId: number;
  postId: number;
}

export default function CommentDropdownUI({ commentId, postId }: IProps) {
  const onClick = async () => {
    await deleteCommentAction(commentId, postId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='mr-6 focus-visible:outline-grayScale-200'>
        <RadixIcon name='DotsVerticalIcon' size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className='border-grayScale-400'>
          <DropdownMenuItem className='cursor-pointer' onClick={onClick}>삭제</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
