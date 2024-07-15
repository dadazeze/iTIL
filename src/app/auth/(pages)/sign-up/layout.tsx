import AuthAppBarUI from '@/components/common/bar/AuthAppBarUI';
import { MenuBarUI } from '@/components/common/bar/MenuBarUI';
import Typography from '@/components/ui/typography';

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
