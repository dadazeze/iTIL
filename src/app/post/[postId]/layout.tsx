import { getPostById } from '@/shared/services/post';
import { PostAppBar } from '@/widgets/post/components/PostAppBar';
import { notFound } from 'next/navigation';
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
  console.log(params)
  const postId = params.postId;

  if (isNaN(Number(postId))) {
    return notFound();
  }
  const post = await getPostById(postId);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <PostAppBar postKeyword={post.keyword} />
      {children}
    </>
  );
}
