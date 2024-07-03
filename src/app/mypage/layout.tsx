import BottomNavBarUI from "@/components/common/bar/BottomNavBarUi";
import { MainAppBar } from "@/components/common/bar/MainAppBar";

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainAppBar />
      {children}
      <BottomNavBarUI />
    </>
  );
}
