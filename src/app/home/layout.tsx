import BottomNavBarUI from '@/components/common/BottomNavBarUi';
import { MenubarUI } from '@/components/common/MenuBarUI';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenubarUI />
      {children}
      <BottomNavBarUI />
    </>
  );
}
