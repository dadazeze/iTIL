'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormUI } from '@/components/common/FormUI';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import { signup } from '../../../lib/actions';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const initialFormState = {
  success: false,
  message: '',
};

export default function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const onToSignUpClick = () => {
    router.push('/auth/sign-up');
  };

  return (
    <div>
      <FormUI form={form}>
        <FormUI.Field name='email'>
          {(props) => <Input placeholder='ID:' {...props} />}
        </FormUI.Field>
        <FormUI.Field name='password'>
          {(props) => <Input placeholder='PW:' {...props} />}
        </FormUI.Field>
        <Button type='submit'>로그인</Button>
      </FormUI>
      <Button onClick={onToSignUpClick}>회원가입</Button>
    </div>
  );
}
