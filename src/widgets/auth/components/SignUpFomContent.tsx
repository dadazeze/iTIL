'use client';


import { FormUI } from '@/shared/components/common/form/FormUI';
import { SelectUI } from '@/shared/components/common/form/SelectUI';
import { LoadingSpinner } from '@/shared/components/common/loading/LoadingSpinnerUI';
import { Button } from '@/shared/components/ui/Button';
import { experienceLevelItemList, roleItemList } from '@/shared/lib/constants';
import { useFormStatus } from 'react-dom';

const SignUpFormContent = () => {
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
            onChange={props.onChange}
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

export default SignUpFormContent;
