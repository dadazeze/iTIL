import { getProfileById } from "@/shared/services/profiles";
import CommentBottomBarUI from "./CommentBottomBarUI";

interface IProps {
    postId: number
}

export default async function CommentBottomBarWrapper({postId}: {postId: number}) {
    const user = await getProfileById();
  return (
  <CommentBottomBarUI user={user?.at(0)} postId={postId} />
  )
}