import { SelectUI } from '@/components/common/SelectUI';
import { experienceLevelItemList, roleItemList } from './lib/constants';

export default function Page() {
  return (
    <div>
      <div className='pt-3 flex gap-2'>
        <SelectUI itemList={roleItemList} placeholder='직군을 선택하세요' />
        <SelectUI
          itemList={experienceLevelItemList}
          placeholder='경력을 선택하세요'
        />
      </div>
    </div>
  );
}
