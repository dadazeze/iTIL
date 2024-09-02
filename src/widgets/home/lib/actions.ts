'use server';

import { createPost } from '@/shared/services/post';
import { IHomePostParams } from '../types/parameter';
import { TFormActionState } from '@/shared/types/domain';

export const createPostAction = async (
  prevState: TFormActionState | null,
  data: FormData,
  extraData: Pick<IHomePostParams, 'user_id' | 'view'>
): Promise<TFormActionState> => {
  console.log(data);
  try {
    const newData = {
      title: data.get('title') as string,
      keyword: data.get('keyword') as string,
      description: data.get('description') as string,
      img_url: data.get('img_url') as string | null,
    };

    await createPost({ ...newData, ...extraData });
    // revalidatePath("/home");
    console.log({ ...newData, ...extraData });
    return {
      status: 'success',
      message: 'Profile updated successfully',
    };
  } catch (e) {
    return {
      status: 'error',
      message: 'Profile update failed' + e,
    };
  }
};
