import { IHomePostFilterParams } from "@/app/home/types/parameter";
import { createClient } from "@/lib/supabase/server";

const supabase = createClient();

export const getPosts = async (filter?: IHomePostFilterParams) => {
  const { data, error } = await supabase.from("post").select("*, profiles(*)");
  if (error) {
    throw new Error(error.message);
  }

  return filter
    ? data.filter(
        (item) => item.role === filter.role && item.level === filter.level
      )
    : data;
};

export const getPostsById = async (userId?: string) => {
  if (!userId) return [];
  const { data, error } = await supabase
    .from("post")
    .select("*, profiles(*)")
    .eq("user_id", userId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createPost = async (data: any) => {
  const { error } = await supabase.from("posts").insert(data);
  if (error) {
    throw new Error(error.message);
  }
};
