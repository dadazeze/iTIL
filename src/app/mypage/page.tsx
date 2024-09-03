import { getPostListByDate, getPostListByUserId } from '@/shared/services/post';
import { getProfileById } from '@/shared/services/profiles';
import Feed from '../../widgets/mypage/components/Feed';
import Profile from '../../widgets/mypage/components/Profile';

export default async function Page() {
  const profile = await getProfileById();
  const postList = await getPostListByUserId(profile?.at(0)?.id);
  const date = await getPostListByDate('2024-06');
  return (
    <>
      <Profile profile={profile?.at(0) ?? null} />
      <Feed postList={postList} />
    </>
  );
}
