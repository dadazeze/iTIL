import { CardDetailUI } from '@/shared/components/common/card/CardDetailUI';
import CommentUI from '@/shared/components/common/comment/CommentUI';
import { getPostById } from '@/shared/services/post';

interface IProps {
  params: {
    postId: string;
  };
}

export default async function PostPage({ params }: IProps) {
  const postId = params.postId;
  const post = await getPostById(postId);
  return (
    <div className='bg-grayScale-100 flex flex-col gap-2'>
      <CardDetailUI item={post} />
      <CommentUI />
    </div>
  );
}
