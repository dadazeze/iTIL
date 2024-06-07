import { CardUI } from '@/components/common/CardUI';
import { SelectUI } from '@/components/common/SelectUI';
import { experienceLevelItemList, roleItemList } from './lib/constants';

export default function Page() {
  return (
    <div>
      <div className='pt-3 pb-3 flex gap-2'>
        <SelectUI itemList={roleItemList} placeholder='직군을 선택하세요' />
        <SelectUI
          itemList={experienceLevelItemList}
          placeholder='경력을 선택하세요'
        />
      </div>
      <div className='flex flex-col gap-2 bg-gray-100'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CardUI key={item} />
        ))}
      </div>
    </div>
  );
}
