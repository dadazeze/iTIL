import { createClient } from '@/lib/supabase/server';

const supabase = createClient();

export const getProfileById = async (id: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
