import RadixIcon from '@/assets/radix-icon';
import { Button } from '../../ui/Button';
import Typography from '../../ui/typography';

export const MenuBarUI = () => {
  return (
    <nav className='flex justify-around sticky top-0 z-50 h-[60px] p-4 pt-2 bg-white shadow-nav-bar'>
      <div className='flex items-center justify-between w-full'>
        <Typography type='h3' className='text-xl'>
          iTIL
        </Typography>
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
      </div>
    </nav>
  );
};
