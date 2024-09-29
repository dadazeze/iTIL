import { Suspense } from "react";
import { PostAppBar } from "./PostAppBar";
import { getPostById } from "@/shared/services/post";

interface IProps {
    postId: string;
}

export default async function PostAppBarWrapper({ postId }: IProps) {
    const post = await getPostById(postId);
  return (
    <PostAppBar postKeyword={post.keyword} />
  )
}