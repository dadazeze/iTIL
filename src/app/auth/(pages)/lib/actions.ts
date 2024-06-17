'use server';

import { createClient } from '@/lib/supabase/service';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface IFormState {
  success: boolean;
  message: string;
}

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(
  preState: IFormState,
  formData: FormData
): Promise<IFormState> {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    pwdConfirm: formData.get('pwdConfirm') as string,
    nickName: formData.get('nickName') as string,
    role: formData.get('role') as string,
    level: formData.get('level') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return {
      success: false,
      message: 'Login Failed',
    };
  }

  revalidatePath('/', 'layout');
  if (typeof window === 'undefined') redirect('/');
  return {
    success: true,
    message: 'Login Success',
  };
}
