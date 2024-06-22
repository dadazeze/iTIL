import { createClient } from '@/lib/supabase/server';

const supabase = createClient();

export const getProfileById = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  console.log(user);
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', user?.id)
    .single();

  const newError = authError ?? error;

  if (newError) {
    throw new Error(newError.message);
  }

  return data;
};
