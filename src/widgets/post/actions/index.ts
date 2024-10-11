'use server';

import { createCommnet } from '@/shared/services/comment';
import { revalidatePath } from 'next/cache';
import { TFormActionState } from '../../../shared/types/domain';

export const createCommentAction = async (
  prevState: TFormActionState | null,
  data: FormData,
  extraData:  {post_id: number, user_id: string}
): Promise<TFormActionState> => {
  try {
    const newData = {
      content: data.get('content') as string,
      post_id: extraData.post_id,
      user_id: extraData.user_id,
    };

    console.log(data);
    await createCommnet(newData);

    revalidatePath(`/post/${newData.post_id}`);

    return {
      status: 'success',
      message: 'Comment created successfully',
    };
  } catch (e: unknown) {
    return {
      status: 'error',
      message: `Comment create failed ${e.message}`,
    };
  }
};
