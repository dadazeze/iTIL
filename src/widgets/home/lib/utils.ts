import { getProfileById } from '@/shared/services/profiles';
import { redirect } from 'next/navigation';

export const getUserId = async () => {
  const profile = await getProfileById();

  if (
    (profile && profile?.at(0)?.role === null) ||
    profile?.at(0)?.level === null
  ) {
    redirect('/auth/sign-up');
  }

  return profile?.at(0)?.id;
};
