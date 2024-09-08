import MainAppBarUI from '@/shared/components/common/bar/MainAppBarUI';
import MainBottomNavBarUI from '@/widgets/home/components/MainBottomNavBarUI';
import { getUserId } from '@/widgets/home/lib/utils';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getUserId();

  return (
    <>
      <MainAppBarUI />
      {children}
      <MainBottomNavBarUI userId={userId ?? ''} />
    </>
  );
}
