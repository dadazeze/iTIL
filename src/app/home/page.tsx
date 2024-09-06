import { getPostList } from '@/shared/services/post';
import { getProfileById } from '@/shared/services/profiles';
import { PostList } from '../../widgets/common/components/PostList';
import Filter from '../../widgets/home/components/Filter';

export default async function Page() {
  const profile = await getProfileById();
  const postList = await getPostList();
  return (
    <main>
      <Filter profile={profile?.at(0) ?? null} />
      <PostList postList={postList} />
    </main>
  );
}
