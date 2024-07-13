import { CardUI } from '@/components/common/card/CardUI';
import { IPostView } from '../types/view';

interface IProps {
  postList: IPostView[];
}

export const Post = ({ postList }: IProps) => {
  return (
    <section className='flex flex-col gap-1 bg-grayScale-100 pt-1 pb-1'>
      {postList.map((item) => (
        <CardUI key={item.id} item={item} />
      ))}
    </section>
  );
};
