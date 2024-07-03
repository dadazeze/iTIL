'use client';
import { useForm } from 'react-hook-form';

import { SignUpParams } from '@/app/auth/types/parameter';
import { FormUI } from '@/components/common/form/FormUI';
import { SelectUI } from '@/components/common/form/SelectUI';
import { Button } from '@/components/ui/Button';
import { experienceLevelItemList, roleItemList } from '@/lib/constants';
import { updateProfile } from '../../../lib/actions';

const initialFormState = {
  success: false,
  message: '',
};

export default function SignUpForm() {
  const form = useForm<SignUpParams>({
    defaultValues: {
      role: '',
      level: '',
    },
  });

  return (
    <div>
      <FormUI form={form}>
        <FormUI.Field name='role'>
          {(props) => (
            <SelectUI {...props} placeholder='직군' itemList={roleItemList} onChange={props.onChange} />
          )}
        </FormUI.Field>
        <FormUI.Field name='level'>
          {(props) => (
            <SelectUI
              {...props}
              placeholder='연차'
              itemList={experienceLevelItemList}
            />
          )}
        </FormUI.Field>
        <div className='flex justify-center'>
          <Button type='submit' formAction={updateProfile}>
            회원가입
          </Button>
          <p onClick={() => console.log(form.getValues())}>test</p>
        </div>
      </FormUI>
    </div>
  );
}
