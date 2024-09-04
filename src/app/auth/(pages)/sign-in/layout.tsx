import AuthAppBarUI from '@/widgets/auth/components/AuthAppBarUI';

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthAppBarUI signIn={true} />
      {children}
    </>
  );
}
