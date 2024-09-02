import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import { DialogClose } from '@/shared/components/ui/dialog';
import { AppBarUI } from '../../../shared/components/common/bar/AppBarUI';

export const PostAppBarUI = () => {
  const onSave = () => {
    console.log('저장');
  };

  const onTempSave = () => {
    console.log('임시저장');
  };

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
      <AppBarUI.Right>
        <div className='flex gap-1'>
          <DialogClose asChild>
            <Button variant={'tempSave'} size={'smButton'} onClick={onTempSave}>
              임시저장
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={'save'}
              size={'smButton'}
              onClick={onSave}
              type='submit'
            >
              저장
            </Button>
          </DialogClose>
        </div>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
