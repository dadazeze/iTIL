'use client';

import RadixIcon from '@/assets/radix-icon';
import { MenuBarUI } from '@/components/common/bar/MenuBarUI';
import { Button } from '@/components/ui/Button';
import Typography from '@/components/ui/typography';
import { useRouter } from 'next/navigation';

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <>
      <MenuBarUI
        left={
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon
              name='ArrowLeftIcon'
              size={20}
              className=' -translate-y-0.5'
              onClick={() => router.back()}
            />
          </Button>
        }
        center={<Typography type='h4'>로그인</Typography>}
        right={<></>}
      />
      {children}
    </>
  );
}
