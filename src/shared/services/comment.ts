import { createClient } from "../lib/supabase/server";

const supabase = createClient();

export const getCommentList = async (postId: string) => {
    const { data, error } = await supabase.from('comment').select('*, profiles(*)').eq('post_id', postId);
    if (error) {
      throw new Error(error.message);
    }
  
    return data;
  };