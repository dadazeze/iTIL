import MainAppBarUI from "@/shared/components/common/bar/MainAppBarUI";
import MainBottomNavBarWrapper from "@/widgets/home/components/MainBottomNavBarWrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainAppBarUI />
      {children}
      <MainBottomNavBarWrapper />
    </>
  );
}
