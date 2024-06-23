'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormUI } from '@/components/common/FormUI';
import { SelectUI } from '@/components/common/SelectUI';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
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
        <FormUI.Field name='email'>
          {(props) => <Input {...props} placeholder='아이디' type='email' />}
        </FormUI.Field>
        <FormUI.Field name='password'>
          {(props) => (
            <Input {...props} placeholder='비밀번호' type='password' />
          )}
        </FormUI.Field>
        <FormUI.Field name='pwdConfirm'>
          {(props) => (
            <Input {...props} placeholder='비밀번호 확인' type='password' />
          )}
        </FormUI.Field>
        <FormUI.Field name='nickName'>
          {(props) => <Input {...props} placeholder='닉네임' />}
        </FormUI.Field>
        <FormUI.Field name='role'>
          {(props) => (
            <SelectUI
              {...props}
              placeholder='직군'
              itemList={[
                { label: '프론트엔드', value: 'FE' },
                { label: '백엔드', value: 'BE' },
              ]}
            />
          )}
        </FormUI.Field>
        <FormUI.Field name='level'>
          {(props) => (
            <SelectUI
              {...props}
              placeholder='연차'
              itemList={[
                { label: '신입', value: 'entry-level' },
                { label: '1년차', value: 'one-year' },
              ]}
            />
          )}
        </FormUI.Field>
        <Button type='submit' formAction={signup}>
          회원가입
        </Button>
        <Button onClick={() => signInWithGitHub()}>깃헙 로그인</Button>
        <Button onClick={() => signOut()}>로그아웃</Button>
      </FormUI>
    </div>
  );
}
