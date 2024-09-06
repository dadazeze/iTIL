import { IPostView } from '@/widgets/common/types/view';
interface Props {
  post: IPostView;
  index: number;
}

export default function MyPageCard({ post, index }: Props) {
  return (
    <div
      key={`${post.title}-${index}`}
      className='relative w-full aspect-square bg-level-100 flex items-center justify-center text-xs'
    >
      {post.keyword}
    </div>
  );
}
