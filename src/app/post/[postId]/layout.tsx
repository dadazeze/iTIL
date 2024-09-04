import { getPostById } from '@/shared/services/post';
import { PostAppBar } from '@/widgets/post/components/PostAppBar';
import React from 'react';

export default async function PostLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    postId: string;
  };
}) {
  const postId = params.postId;
  const post = await getPostById(postId);
  return (
    <>
      <PostAppBar postKeyword={post.keyword} />
      {children}
    </>
  );
}
