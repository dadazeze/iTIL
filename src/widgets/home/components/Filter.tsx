'use client';

import { SelectUI } from '@/shared/components/common/form/SelectUI';
import { experienceLevelItemList, roleItemList } from '@/shared/lib/constants';
import { IUserProfileView } from '@/widgets/common/types/view';
import { useState } from 'react';

interface IProps {
  profile: IUserProfileView | null;
}

export default function Filter({ profile }: IProps) {
  const [role, setRole] = useState(profile?.role ?? '');
  const [level, setLevel] = useState(profile?.level ?? '');

  return (
    <section className='pt-3 pb-3 flex gap-2'>
      <SelectUI
        itemList={roleItemList}
        placeholder='직군을 선택하세요'
        onChange={(value) => setRole(value)}
        value={role}
      />
      <SelectUI
        itemList={experienceLevelItemList}
        placeholder='경력을 선택하세요'
        onChange={(value) => setLevel(value)}
        value={level}
      />
    </section>
  );
}
