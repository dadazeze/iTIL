'use client';
import { getDaysInMonth } from '@/shared/lib/utils';
import { IPostView } from '@/widgets/home/types/view';
import MyPageCard from './MyPageCard';

interface Iprop {
  postList: IPostView[];
}

// TODO: 무한스크롤 구현
export default function Feed({ postList }: Iprop) {
  const days = getDaysInMonth('2024-07');
  return (
    <>
      <div className='container mx-auto p-0'>
        <hr className='h-0.5 border-none bg-grayScale-300' />
        <div className='flex flex-row ml-[16px] my-[6px]'>
          <div>April&nbsp;</div>
          <div>2024</div>
        </div>
        <div className='grid grid-cols-5'>
          {postList.map((post, index) => (
            <MyPageCard
              key={`${post.title}-${index}`}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
