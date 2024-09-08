'use client';

import RadixIcon from '@/assets/radix-icon';
import { useRouter } from 'next/navigation';
import PostModalUI from './PostModalUI';
import { Button } from '../../../shared/components/ui/Button';
import BottomNavBarUI from '../../../shared/components/common/bar/BottomNavBarUI';

interface IProps {
  userId: string;
}

export default function MainBottomNavBarUI({ userId }: IProps) {
  const router = useRouter();

  return (
    <BottomNavBarUI>
      <nav className='flex justify-around w-full z-50 h-[60px] p-4 pt-2 bg-white shadow-nav-bar'>
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={() => router.push('/home')}
        >
          <RadixIcon name='HomeIcon' size={30} />
        </Button>
        <PostModalUI userId={userId} />
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={() => router.push('/mypage')}
        >
          <RadixIcon name='PersonIcon' size={30} />
        </Button>
      </nav>
    </BottomNavBarUI>
  );
}
