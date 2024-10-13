import { IPostView } from "@/widgets/home/types/view";
interface Props {
  post: IPostView;
  index: number;
}

// TODO: 클릭 시 포스트 페이지 이동
export default function Card({ post, index }: Props) {
  return (
    <div
      key={`${post.title}-${index}`}
      className="relative w-full aspect-square bg-level-100 flex items-center justify-center text-xs cursor-pointer"
    >
      {post.keyword}
    </div>
  );
}
