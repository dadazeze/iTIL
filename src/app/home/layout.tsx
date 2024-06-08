import { MenubarUI } from '@/components/common/MenuBarUI';
import BottomNavBarUI from '@/components/common/BottomNavBarUI';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenubarUI />
      {children}
      <BottomNavBarUI />
    </>
  );
}
