import { getPostById } from '@/shared/services/post';
import { getProfileById } from '@/shared/services/profiles';
import CommentBottomBarUI from '@/widgets/post/components/CommentBottomBarUI';
import CommentBottomBarWrapper from '@/widgets/post/components/CommentBottomBarWrapper';
import { PostAppBar } from '@/widgets/post/components/PostAppBar';
import PostAppBarWrapper from '@/widgets/post/components/PostAppBarWrapper';
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

  return (
    <>
      <div className='pb-24'>
        <PostAppBarWrapper postId={postId} />
        {children}
        <CommentBottomBarWrapper postId={+postId} />
      </div>
    </>
  );
}
