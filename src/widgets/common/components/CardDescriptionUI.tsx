'use client';

import Typography from '@/shared/components/ui/typography';
import { getIsOverflow } from '@/shared/lib/utils';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  description: string;
  isDetail?: boolean;
}

export default function CardDescriptionUI({ description, isDetail }: IProps) {
  const [isOverflow, setIsOverflow] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOverflow(getIsOverflow(descriptionRef.current));
  }, [setIsOverflow, descriptionRef]);

  return (
    <>
      <div
        className='pt-4 pb-5 elipsis-3 h-[100px] w-[85%]'
        ref={descriptionRef}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      />
      {isOverflow && !isDetail && (
        <Link href={'/'} className='text-grayScale-400'>
          더보기
        </Link>
      )}
    </>
  );
}
