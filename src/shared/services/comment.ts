import { createClient } from '../lib/supabase/server';

export const getCommentList = async (postId: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('comment')
    .select('*, profiles(*)')
    .eq('post_id', postId);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};
