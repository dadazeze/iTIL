
import MainBottomNavBarUI from '@/widgets/home/components/MainBottomNavBarUI';
import { getUserId } from '@/widgets/home/lib/utils';
import { MyPageAppBar } from '@/widgets/mypage/components/MyPageAppBar';

export const dynamic = 'force-dynamic';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = await getUserId();

  return (
    <>
      <MyPageAppBar />
      <div className='mb-16'>{children}</div>
      <MainBottomNavBarUI userId={userId ?? ''} />
    </>
  );
}
