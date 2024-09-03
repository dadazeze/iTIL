import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import Typography from '@/shared/components/ui/typography';
import { AppBarUI } from './AppBarUI';

export default function MainAppBarUI() {
  return (
    <AppBarUI>
      <AppBarUI.Left>
        <Typography type='h3' className='text-xl'>
          iTIL
        </Typography>
      </AppBarUI.Left>
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
}
