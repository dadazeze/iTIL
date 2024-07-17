import Feed from "./_widget/Feed";
import Profile from "./_widget/Profile";
import { getProfileById } from "@/services/profiles";
import { getPostsById } from "@/services/post";
import { getPostsByDate } from "@/services/post";
import dayjs from "dayjs";

export default async function Page() {
  const profile = await getProfileById();
  const postList = await getPostsById(profile?.at(0)?.id);
  const date = await getPostsByDate("2024-06");
  return (
    <>
      <Profile profile={profile?.at(0) ?? null} />
      <Feed postList={postList} />
    </>
  );
}
