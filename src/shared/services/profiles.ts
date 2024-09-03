import { createClient } from '@/shared/lib/supabase/server';
import { IUserProfileView } from '@/widgets/home/types/view';

const supabase = createClient();

export const getProfileById = async (): Promise<IUserProfileView[] | null> => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id);

  const newError = authError ?? error;

  if (newError) {
    throw new Error(newError.message);
  }

  return data;
};

export const updateProfileById = async (data: any) => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', user?.id);

  const newError = authError ?? error;

  if (newError) {
    throw new Error(newError.message);
  }
};
