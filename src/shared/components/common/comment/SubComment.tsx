import { cn } from '@/shared/lib/style/utils';
import Typography from '../../ui/typography';
import AvatarProfileUI from '../card/AvatarProfileUI';

interface IProps {
    className?: string;
}

export function SubComment({className}: IProps) {
  return (
    <div className={cn('grid grid-cols-[40px 45px 1fr]', className)}>
      <Typography>{}</Typography>
      <AvatarProfileUI className='col-span-2' />
      <Typography className='col-start-3'>{}</Typography>
    </div>
  );
}

export default SubComment;
