'use client';

import AuthAppBarUI from '@/widgets/auth/components/AuthAppBarUI';
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
