import { Header } from "@/components/common/HeaderUI";
import BottomNavBarUI from "@/components/common/BottomNavBarUi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <MenubarUI /> */}
      <Header>
        <Header.Alert />
      </Header>
      {children}
      <BottomNavBarUI />
    </>
  );
}
