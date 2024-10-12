import { supabaseClient } from "../lib/supabase";

export const deleteComment = async (commentId: number) => {
    const { error } = await supabaseClient.from('comment').delete().eq('id', commentId);
    if (error) {
      throw new Error(error.message);
    }
  };