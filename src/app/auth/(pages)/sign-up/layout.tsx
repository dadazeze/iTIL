import AuthAppBarUI from '@/shared/components/common/bar/AuthAppBarUI';

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthAppBarUI />
      {children}
    </>
  );
}
