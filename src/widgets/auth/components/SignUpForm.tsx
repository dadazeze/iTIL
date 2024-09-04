'use client';

import { FormUI } from '@/shared/components/common/form/FormUI';
import { TFormActionState } from '@/shared/types/domain';
import { SignUpParams } from '@/widgets/auth/types/parameter';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { updateProfileAction } from '../lib/actions';
import SignUpFormContent from './SignUpFomContent';

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
        <SignUpFormContent />
      </FormUI>
    </div>
  );
}
