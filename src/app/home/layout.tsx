import { MenubarUI } from "@/components/common/MenuBarUI";
import BottomNavBarUI from "@/components/common/BottomNavBarUi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenubarUI />
      {children}
      <BottomNavBarUI />
    </>
  );
}
