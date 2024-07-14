'use client';

import Typography from '@/components/ui/typography';
import { getIsOverflow } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  description: string;
}

export default function CardDescriptionUI({ description }: IProps) {
  const [isOverflow, setIsOverflow] = useState(false);
  const descriptionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOverflow(getIsOverflow(descriptionRef.current));
  }, [setIsOverflow, descriptionRef]);

  return (
    <>
      <Typography
        type='pre'
        className='pt-4 pb-5 elipsis-3 h-[100px] w-[85%]'
        textRef={descriptionRef}
      >
        {description}
      </Typography>
      {isOverflow && (
        <Link href={'/'} className='text-grayScale-400'>
          더보기
        </Link>
      )}
    </>
  );
}
