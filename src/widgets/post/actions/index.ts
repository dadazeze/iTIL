'use server';

import { createCommnet } from '@/shared/services/comment';
import { revalidatePath } from 'next/cache';
import { TFormActionState } from '../../../shared/types/domain';

export const createCommentAction = async (
  prevState: TFormActionState | null,
  data: FormData
): Promise<TFormActionState> => {
  try {
    const newData = {
      content: data.get('content') as string,
      post_id: Number(data.get('post_id')),
      user_id: data.get('user_id') as string,
    };

    console.log(data.get('post_id'));
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
