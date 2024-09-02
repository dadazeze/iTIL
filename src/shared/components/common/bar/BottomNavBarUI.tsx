'use client';

import RadixIcon from '@/assets/radix-icon';
import { useRouter } from 'next/navigation';
import PostModalUI from '../../../../widgets/home/components/PostModalUI';
import { Button } from '../../ui/Button';

interface IProps {
  userId: string;
}

export default function BottomNavBarUI({ userId }: IProps) {
  const router = useRouter();

  return (
    <div className='fixed bottom-0 w-full max-w-[672px]'>
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
    </div>
  );
}
