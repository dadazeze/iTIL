import RadixIcon from '@/assets/radix-icon';
import { Button } from '@/shared/components/ui/Button';
import Typography from '@/shared/components/ui/typography';
import { cn } from '@/shared/lib/style/utils';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AvatarUI } from './AvatarUI';

interface IProps {
  nickName: string;
  roleAndLevel: string;
  createdAt: string;
  src: string;
  isComment?: boolean;
  size?: string;
  className?: string;
}

export default function AvatarProfileUI({
  nickName,
  roleAndLevel,
  src,
  createdAt,
  isComment,
  className,
  size,
}: IProps) {
  dayjs.extend(relativeTime);
  dayjs.locale(ko);
  return (
    <div className={cn('flex justify-left gap-2', className)}>
      <AvatarUI src={src} />
      <div className='flex flex-col'>
        <div className='flex items-center gap-2'>
          <Typography type='p' className='text-sm text-gray-600'>
            {nickName}
          </Typography>
          <Typography type='p' className='text-xs text-gray-300'>
            {dayjs(createdAt).fromNow()}
          </Typography>
        </div>
        <Typography type='p' className='text-sm text-gray-300'>
          {roleAndLevel}
        </Typography>
      </div>
      {isComment && (
        <Button>
          <RadixIcon name='DotsVerticalIcon' />
        </Button>
      )}
    </div>
  );
}
