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

export const getSubCommentList = async (commentId: number) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('sub_comment')
    .select('*, profiles(*)')
    .eq('comment_id', commentId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
