import { getProfileById } from "@/shared/services/profiles";
import { PostList } from "../../widgets/common/components/PostList";
import Filter from "../../widgets/home/components/Filter";

export default async function Page() {
  const profile = await getProfileById();
  return (
    <main>
      <Filter profile={profile?.at(0) ?? null} />
      {/* <Suspense fallback={<CardSkeletonUI />}> */}
      <PostList />
      {/* </Suspense> */}
    </main>
  );
}
