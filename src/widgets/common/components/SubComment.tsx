import { cn } from '@/shared/lib/style/utils';
import { levelToKor, roleToKor } from '@/shared/lib/utils';
import AvatarProfileUI from '../../../shared/components/common/card/AvatarProfileUI';
import Typography from '../../../shared/components/ui/typography';
import { ISubCommentView } from '../types/view';
import { Card } from '@/shared/components/ui/card';

interface IProps {
  className?: string;
  item: ISubCommentView;
}

export function SubComment({ className, item }: IProps) {
  return (
    <div className={cn('grid grid-cols-[40px_45px_1fr]', className)}>
      <Typography>{}</Typography>
      <AvatarProfileUI
        src={item.profiles.avatar_url}
        nickName={item.profiles.username}
        roleAndLevel={`${roleToKor[item.profiles.role]} / ${
          levelToKor[item.profiles.level]
        }`}
        createdAt={item.created_at}
        className='col-span-2'
      />
      <Card className='col-start-3'>
        <Typography >{item.content}</Typography>
      </Card>
    </div>
  );
}

export default SubComment;
