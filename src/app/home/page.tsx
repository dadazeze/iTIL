import { getPosts } from "@/services/post";
import { getProfileById } from "@/services/profiles";
import Filter from "./_widgets/Filter";
import { Post } from "./_widgets/Post";

export default async function Page() {
  const profile = await getProfileById();
  const postList = await getPosts();
  console.log("💚", postList);
  return (
    <main>
      <Filter profile={profile?.at(0) ?? null} />
      <Post postList={postList} />
    </main>
  );
}
