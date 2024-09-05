import Typography from '../../ui/typography';
import AvatarProfileUI from '../card/AvatarProfileUI';
import SubComment from './SubComment';

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
