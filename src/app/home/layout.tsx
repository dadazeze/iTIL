import RadixIcon from '@/assets/radix-icon';
import BottomNavBarUI from '@/components/common/bar/BottomNavBarUI';
import { MenuBarUI } from '@/components/common/bar/MenuBarUI';
import { Button } from '@/components/ui/Button';
import Typography from '@/components/ui/typography';
import { createClient } from '@/lib/supabase/server';
import { getProfileById } from '@/services/profiles';

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    throw new Error(error?.message);
  }
  console.log(data);

  // const profile = await getProfileById();
  // console.log(profile);

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
