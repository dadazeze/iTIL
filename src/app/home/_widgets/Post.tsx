import React from 'react';
import { IPostView } from '../types/view';
import { CardUI } from '@/components/common/card/CardUI';

interface IProps {
  postList: IPostView[]
}

export const Post = ({postList}: IProps) => {
  return (
    <section className='flex flex-col gap-2 bg-gray-100'>
        {postList.map((item) => (
          <CardUI key={item.id} item={item} />
        ))}
      </section>
  )
}
