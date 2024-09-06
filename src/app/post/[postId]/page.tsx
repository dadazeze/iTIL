import { getCommentList } from '@/shared/services/comment';
import { getPostById } from '@/shared/services/post';
import { CardDetailUI } from '@/widgets/common/components/CardDetailUI';
import CommentUI from '@/widgets/common/components/CommentUI';

interface IProps {
  params: {
    postId: string;
  };
}

export default async function PostPage({ params }: IProps) {
  const postId = params.postId;
  const post = await getPostById(postId);
  const commentList = await getCommentList(postId);
  console.log(commentList);
  return (
    <div className='bg-grayScale-100 flex flex-col gap-2'>
      <CardDetailUI item={post} />
      <CommentUI />
    </div>
  );
}
