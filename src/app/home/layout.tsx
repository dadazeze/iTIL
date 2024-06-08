import BottomNavBarUI from "@/components/common/BottomNavBarUi";
import { MenubarUI } from "@/components/common/MenuBarUI";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenubarUI />
      <div className="bg-required">testtesttesttesttest</div>
      {children}
      <BottomNavBarUI />
    </>
  );
}
