import RadixIcon from '@/assets/radix-icon';
import { AppBarUI } from '@/shared/components/common/bar/AppBarUI';
import { Button } from '@/shared/components/ui/Button';

export const MyPageAppBar = () => {
  return (
    <AppBarUI>
      <AppBarUI.Left>iTIL</AppBarUI.Left>
      <AppBarUI.Right>
        <div className='flex gap-1'>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='BellIcon' size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon
              name='PaperPlaneIcon'
              size={20}
              className='-rotate-45 -translate-y-0.5'
            />
          </Button>
        </div>
      </AppBarUI.Right>
    </AppBarUI>
  );
};
