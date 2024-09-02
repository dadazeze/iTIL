import BottomNavBarUI from '@/shared/components/common/bar/BottomNavBarUI';
import MainAppBarUI from '@/shared/components/common/bar/MainAppBarUI';
import { getUserId } from '@/widgets/home/lib/utils';

export const dynamic = 'force-dynamic';

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
      <BottomNavBarUI userId={userId ?? ''} />
    </>
  );
}
