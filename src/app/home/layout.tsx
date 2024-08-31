import BottomNavBarUI from '@/components/common/bar/BottomNavBarUI';
import MainAppBarUI from '@/components/common/bar/MainAppBarUI';
import { getProfileById } from '@/services/profiles';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfileById();

  if (
    (profile && profile?.at(0)?.role === null) ||
    profile?.at(0)?.level === null
  ) {
    redirect("/auth/sign-up");
  }

  return (
    <>
      <MainAppBarUI  />
      {children}
      <BottomNavBarUI userId={profile?.at(0)?.id ?? ''} />
    </>
  );
}
