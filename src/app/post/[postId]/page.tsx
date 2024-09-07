import { getCommentList } from "@/shared/services/comment";
import { getPostById } from "@/shared/services/post";
import { CardDetailUI } from "@/widgets/common/components/CardDetailUI";
import CommentUI from "@/widgets/post/components/CommentUI";
import CommentWrapper from "@/widgets/post/components/CommentWrapper";

interface IProps {
  params: {
    postId: string;
  };
}

export default async function PostPage({ params }: IProps) {
  const postId = params.postId;
  const post = await getPostById(postId);
  const commentList = await getCommentList(postId);

  return (
    <div className="bg-grayScale-100 flex flex-col gap-2">
      <CardDetailUI item={post} />
      <CommentWrapper len={commentList.length}>
        {commentList.map((item) => (
          <CommentUI key={item.id} item={item} />
        ))}
      </CommentWrapper>
    </div>
  );
}
