import RadixIcon from '@/assets/radix-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '../../../shared/components/ui/dropdown-menu';

export default function CommentDropdownUI() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='mr-6 focus-visible:outline-grayScale-200'>
        <RadixIcon name='DotsVerticalIcon' size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className='border-grayScale-400'>
          <DropdownMenuItem className='cursor-pointer'>삭제</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
