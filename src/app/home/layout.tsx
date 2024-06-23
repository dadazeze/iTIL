import BottomNavBarUI from '@/components/common/BottomNavBarUi';
import { Header } from '@/components/common/HeaderUI';

export const dynamic = 'force-dynamic';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   throw new Error(error?.message)
  // }

  // const profile = await getProfileById();
  // console.log(profile);

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
