import RadixIcon from '@/assets/radix-icon';
import BottomNavBarUI from '@/shared/components/common/bar/BottomNavBarUI';
import { MenuBarUI } from '@/shared/components/common/bar/MenuBarUI';
import { Button } from '@/shared/components/ui/Button';
import Typography from '@/shared/components/ui/typography';
import { getUserId } from '@/widgets/home/lib/utils';

export const dynamic = 'force-dynamic';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getUserId();

  return (
    <>
      <MenuBarUI
        left={
          <Typography type='h3' className='text-xl'>
            iTIL
          </Typography>
        }
        right={
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
        }
      />
      <div className='mb-16'>{children}</div>
      <BottomNavBarUI userId={userId ?? ''} />
    </>
  );
}
