import { createClient } from '@/shared/lib/supabase/server';
import {
  IHomePostFilterParams,
  IHomePostParams,
} from '@/widgets/home/types/parameter';

export const getPostList = async (filter?: IHomePostFilterParams) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('post').select('*, profiles(*)');
  if (error) {
    throw new Error(error.message);
  }

  return filter
    ? data.filter(
        (item) => item.role === filter.role && item.level === filter.level
      )
    : data;
};

export const getPostListByUserId = async (userId?: string) => {
  const supabase = createClient();
  if (!userId) return [];
  const { data, error } = await supabase
    .from('post')
    .select('*, profiles(*)')
    .eq('user_id', userId);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getPostById = async (postId: string) => {
  const supabase = createClient();

  const numericPostId = Number(postId);

  // postId가 유효한 숫자인지 확인
  if (isNaN(numericPostId)) {
    throw new Error('Post ID must be a valid number.');
  }

  const { data, error } = await supabase
    .from('post')
    .select('*, profiles(*)')
    .eq('id', numericPostId);
  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

export const createPost = async (data: IHomePostParams) => {
  const supabase = createClient();
  const { error } = await supabase.from('post').insert(data);
  if (error) {
    throw new Error(error.message);
  }
};

export const getPostListByDate = async (date: string) => {
  const supabase = createClient();
  const { data, error } = await supabase.rpc('get_records_by_month', {
    date_text: date,
  });
  if (error) {
    throw new Error(error.message);
  }

  return data;
};
