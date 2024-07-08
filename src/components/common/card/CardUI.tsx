import RadixIcon from '@/assets/radix-icon';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '../../ui/Button';
import Typography from '../../ui/typography';
import AvatarProfileUI from './AvatarProfileUI';
import Link from 'next/link';

export function CardUI() {
  return (
    <Card className='w-full rounded-none'>
      <CardHeader>
        <AvatarProfileUI
          src='https://github.com/shadcn.png'
          nickName='zeze'
          roleAndLevel='프론트 / 1년차'
          createdAt={'2022.01.01'}
        />
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='flex flex-col'>
          <Typography type='h4'>Next 1j2k 24.52j4 2</Typography>
          <div className='flex items-end'>
            <Typography
              type='pre'
              className='pt-4 pb-5 elipsis-3 h-[100px] w-[85%]'
            >
              sdfsdfsdsdfsdfsdsdfsdfsd sdfsdfsdsdfsdfsd sdfsdfsdsdfsdfsdsdfsdfsd
              sdfsdfsdsdfsdfsd sdfsdfsd sdfsdfsdsdfsdfsdsdfsdfsdsdfsdfsd
            </Typography>
            <Link href={'/'} className='underline'>더보기</Link>
          </div>
          <div className='flex justify-between p-3'>
            <Typography type='p' className='text-xs'>
              좋아요 4
            </Typography>
            <Typography type='p' className='text-xs'>
              조회수 4
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-around pb-1 pt-1 bg-grayScale-100 mt-2'>
        <Button size={'icon'} variant={'ghost'}>
          <RadixIcon name='HeartIcon' size={20} />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <RadixIcon name='ChatBubbleIcon' size={20} />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <RadixIcon name='BookmarkIcon' size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
}
