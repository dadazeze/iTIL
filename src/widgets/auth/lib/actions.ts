'use server';

import { updateProfileById } from '@/shared/services/profiles';
import { TFormActionState } from '../../../shared/types/domain';

export const updateProfileAction = async (
  prevState: TFormActionState | null,
  data: FormData
): Promise<TFormActionState> => {
  try {
    const newData = {
      role: data.get('role') as string,
      level: data.get('level') as string,
    };

    await updateProfileById(newData);

    return {
      status: 'success',
      message: 'Profile updated successfully',
    };
  } catch (e) {
    return {
      status: 'error',
      message: 'Profile update failed',
    };
  }
};
