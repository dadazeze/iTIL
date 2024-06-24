'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormUI } from '@/components/common/FormUI';
import { SelectUI } from '@/components/common/SelectUI';
import { Button } from '@/components/ui/Button';
import { experienceLevelItemList, roleItemList } from '@/lib/constants';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { signup } from '../../../lib/actions';
import { signInWithGitHub, signOut } from '../../lib/utils';

const formSchema = z.object({
  role: z.string().min(10),
  level: z.string().min(8),
});

const initialFormState = {
  success: false,
  message: '',
};

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: '',
      level: '',
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  const supabase = createClient();

  return (
    <div>
      <FormUI form={form}>
        <FormUI.Field name='role'>
          {(props) => (
            <SelectUI {...props} placeholder='직군' itemList={roleItemList} />
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
        <Button type='submit' formAction={signup}>
          회원가입
        </Button>
        {/* <Button onClick={() => signInWithGitHub()}>깃헙 로그인</Button>
        <Button onClick={() => signOut()}>로그아웃</Button>  */}
      </FormUI>
    </div>
  );
}
