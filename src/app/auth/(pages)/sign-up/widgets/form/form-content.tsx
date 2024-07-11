'use client';

import {
  experienceLevelItemList,
  roleItemList,
} from '@/app/home/_lib/constants';
import { FormUI } from '@/components/common/form/FormUI';
import { SelectUI } from '@/components/common/form/SelectUI';
import { LoadingSpinner } from '@/components/common/loading/LoadingSpinnerUI';
import { Button } from '@/components/ui/Button';
import { useFormStatus } from 'react-dom';

const FormContent = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <FormUI.Field name='role'>
        {(props) => (
          <SelectUI
            {...props}
            placeholder='직군'
            itemList={roleItemList}
            onChange={props.onChange}
          />
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
        <Button type='submit'>
          {pending ? <LoadingSpinner /> : '회원가입'}
        </Button>
      </div>
    </>
  );
};

export default FormContent;
