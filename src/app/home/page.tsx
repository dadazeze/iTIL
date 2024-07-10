import { getProfileById } from '@/services/profiles';
import Header from './_widgets/Header';

export default async function Page() {
  const profile = await getProfileById();
  return <Header profile={profile?.[0] ?? null} />;
}
