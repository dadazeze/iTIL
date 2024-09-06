import AvatarProfileUI from '../../../shared/components/common/card/AvatarProfileUI';
import Typography from '../../../shared/components/ui/typography';
import { ICommentView } from '../types/view';
import SubComment from './SubComment';

interface IProps {
  commentList: ICommentView;
}

export default function CommentUI() {
  return (
    <section>
      <Typography>댓글 {}</Typography>
      <article className='grid grid-cols-[65px 1fr]'>
        <AvatarProfileUI className='col-span-full' />
        <Typography className='col-start-2'>{}</Typography>
        <SubComment className='col-start-2' />
      </article>
    </section>
  );
}
