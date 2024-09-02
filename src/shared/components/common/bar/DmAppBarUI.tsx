import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import { DialogClose } from '@/shared/components/ui/dialog';
import { AppBarUI } from './AppBarUI';
interface Props {
  userId: string;
}

export const DmAppBar = ({ userId }: Props) => {
  return (
    <AppBarUI>
      <AppBarUI.Left>
        <DialogClose asChild>
          <RadixIcon
            name='ArrowLeftIcon'
            size={20}
            className=' -translate-y-0.5 cursor-pointer'
          />
        </DialogClose>
      </AppBarUI.Left>
      <AppBarUI.Center>{userId}</AppBarUI.Center>
      <AppBarUI.Right>
        <div className='flex gap-1'>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='HamburgerMenuIcon' size={20} />
          </Button>
        </div>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
