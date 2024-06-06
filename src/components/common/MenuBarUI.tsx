import RadixIcon from '@/assets/radix-icon';
import { Menubar } from '@/components/ui/menubar';
import { Button } from '../ui/Button';

export const MenubarUI = () => {
  return (
    <Menubar className='p-7'>
      <div className='flex items-center justify-between w-full'>
        <h3 className='text-xl'>iTIL</h3>
        <div className='flex gap-1'>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='BellIcon' size={20} />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='PaperPlaneIcon' size={20} className='-rotate-45 -translate-y-0.5' />
          </Button>
        </div>
      </div>
    </Menubar>
  );
};
