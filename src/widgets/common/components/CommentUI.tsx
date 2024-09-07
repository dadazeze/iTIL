import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import { Card } from '@/shared/components/ui/card';
import { levelToKor, roleToKor } from '@/shared/lib/utils';
import { getSubCommentList } from '@/shared/services/comment';
import AvatarProfileUI from '../../../shared/components/common/card/AvatarProfileUI';
import Typography from '../../../shared/components/ui/typography';
import { ICommentView } from '../types/view';
import SubComment from './SubComment';

interface IProps {
  item: ICommentView;
  len: number;
}

export default async function CommentUI({ item, len }: IProps) {
  const subCommentList = await getSubCommentList(item.id);
  return (
    <section>
      <Typography>댓글 {len}</Typography>
      <article className='grid grid-cols-[65px_1fr]'>
        <div className='col-start-1 col-end-3 flex jus'>
          <AvatarProfileUI
            src={item.profiles.avatar_url}
            nickName={item.profiles.username}
            roleAndLevel={`${roleToKor[item.profiles.role]} / ${
              levelToKor[item.profiles.level]
            }`}
            createdAt={item.created_at}
          />
          <Button size={'icon'} variant={'ghost'}>
            <RadixIcon name='DotsVerticalIcon' size={20} />
          </Button>
        </div>
        <Card className='col-start-2'>
          <Typography>{item.content}</Typography>
        </Card>
        {subCommentList.map((item) => (
          <SubComment className='col-start-2' item={item} />
        ))}
      </article>
    </section>
  );
}
