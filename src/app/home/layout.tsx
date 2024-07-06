import RadixIcon from '@/assets/radix-icon';
import BottomNavBarUI from '@/components/common/bar/BottomNavBarUI';
import { MenuBarUI } from '@/components/common/bar/MenuBarUI';
import { Button } from '@/components/ui/Button';
import Typography from '@/components/ui/typography';
import { getProfileById } from '@/services/profiles';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfileById();
  console.log(profile);

  if (
    (profile && profile?.at(0).role === null) ||
    profile?.at(0).level === null
  ) {
    redirect('/auth/sign-up');
  }

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
      {children}
      <BottomNavBarUI />
    </>
  );
}
