import { getPosts } from '@/shared/services/post';
import { getProfileById } from '@/shared/services/profiles';
import Filter from '../../widgets/home/components/Filter';
import { PostList } from '../../widgets/home/components/PostList';

export const dynamic = "force-dynamic";

export default async function Page() {
  const profile = await getProfileById();
  const postList = await getPosts();
  return (
    <main>
      <Filter profile={profile?.at(0) ?? null} />
      <PostList postList={postList} />
    </main>
  );
}
