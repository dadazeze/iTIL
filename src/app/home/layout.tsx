import { AppBarUI } from "@/components/common/bar/AppBarUI";
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
      <div className="mb-16">{children}</div>
      <BottomNavBarUI />
    </>
  );
}
