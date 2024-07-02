'use server';

import { createClient } from '@/lib/supabase/server';
import { updateProfileById } from '@/services/profiles';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export const updateProfile = async (formData: FormData) => {
  const data = {
    role: formData.get('role') as string,
    level: formData.get('level') as string,
  };
  console.log(formData);

  updateProfileById(data);

  redirect('/home');
};
