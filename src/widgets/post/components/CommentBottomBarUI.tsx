import BottomNavBarUI from '@/shared/components/common/bar/BottomNavBarUI';
import { AvatarUI } from '@/shared/components/common/card/AvatarUI';
import { Button } from '@/shared/components/ui/Button';
import { Input } from '@/shared/components/ui/Input';

interface IProps {
  src: string;
}

export default function CommentBottomBarUI({ src }: IProps) {
  return (
    <BottomNavBarUI className='bg-grayScale-400 h-24 pt-7 pl-5 pr-4 pb-7'>
      <div className='flex gap-2'>
        <AvatarUI src={src} />
        <Input type='textarea' />
        <Button>등록</Button>
      </div>
    </BottomNavBarUI>
  );
}
