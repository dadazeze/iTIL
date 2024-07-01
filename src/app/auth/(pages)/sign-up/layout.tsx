import { MenuBarUI } from '@/components/common/bar/MenuBarUI';
import Typography from '@/components/ui/typography';

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuBarUI
        left={<></>}
        center={<Typography type='h4'>추가정보</Typography>}
        right={<></>}
      />
      {children}
    </>
  );
}
