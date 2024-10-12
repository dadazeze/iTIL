import { CommentParams } from '@/widgets/post/types/parameter';
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

export const createCommnet = async (params: CommentParams) => {
  const supabase = createClient();
  const { error } = await supabase.from('comment').insert(params);
  if (error) {
    throw new Error(error.message);
  }
};

// export const deleteComment = async (commentId: number) => {
//   const supabase = createClient();
//   const { error } = await supabase.from('comment').delete().eq('id', commentId);
//   if (error) {
//     throw new Error(error.message);
//   }
// };
