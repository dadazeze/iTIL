import { getPostById } from '@/shared/services/post';
import { getProfileById } from '@/shared/services/profiles';
import CommentBottomBarUI from '@/widgets/post/components/CommentBottomBarUI';
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
  const postId = params.postId;

  if (isNaN(Number(postId))) {
    return notFound();
  }
  const post = await getPostById(postId);
  const user = await getProfileById();

  if (!post) {
    return notFound();
  }

  return (
    <>
      <div className='pb-24'>
        <PostAppBar postKeyword={post.keyword} />
        {children}
        <CommentBottomBarUI src={user?.at(0)?.avatar_url ?? ''} />
      </div>
    </>
  );
}
