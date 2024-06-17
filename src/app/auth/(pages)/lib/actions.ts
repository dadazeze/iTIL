'use server';

import { createClient } from '@/lib/supabase/server';
import { log } from 'console';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

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

export async function signup() {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  //   pwdConfirm: formData.get('pwdConfirm') as string,
  //   nickName: formData.get('nickName') as string,
  //   role: formData.get('role') as string,
  //   level: formData.get('level') as string,
  // };

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000',
    },
  });

  if (error) {
    console.error(error);
    redirect('/auth/sign-up');
  }
  
  
  const { data: userData, error: userError } = await supabase.auth.getUser();
  console.log(userData);

  if (userError || !userData?.user) {
    redirect('/auth/sign-up');
  }
  
  if (data.url) {
    return NextResponse.redirect(data.url) // use the redirect API for your server framework
  }
  

  revalidatePath('/', 'layout');
  if (typeof window === 'undefined') redirect('/');
}
