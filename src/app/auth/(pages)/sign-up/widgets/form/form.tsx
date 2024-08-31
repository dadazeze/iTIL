'use client';

import { TFormActionState } from '@/app/auth/types/domain';
import { SignUpParams } from '@/app/auth/types/parameter';
import { FormUI } from '@/components/common/form/FormUI';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { updateProfileAction } from '../../../lib/actions';
import FormContent from './form-content';

export default function SignUpForm() {
  const form = useForm<SignUpParams>({
    defaultValues: {
      role: '',
      level: '',
    },
  });

  const [state, formAction] = useFormState<TFormActionState, FormData>(
    updateProfileAction,
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (!state) return;
    if (state.status === 'error') {
      console.log('error');
    }
    if (state.status === 'success') {
      router.push('/home');
    }
  }, [state, router]);

  return (
    <div>
      <FormUI form={form} action={formAction}>
        <FormContent />
      </FormUI>
    </div>
  );
}
