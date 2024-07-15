'use client';

import RadixIcon from '@/assets/radix-icon';
import AuthAppBarUI from '@/components/common/bar/AuthAppBarUI';
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
      <AuthAppBarUI signIn={true} />
      {children}
    </>
  );
}
