'use server';

import { updateProfileById } from '@/services/profiles';
import { TFormActionState } from '../../types/domain';

export const updateProfile = async (
  prevState: TFormActionState | null,
  data: FormData
): Promise<TFormActionState> => {
  try {
    const newData = {
      role: data.get('role') as string,
      level: data.get('level') as string,
    };

    updateProfileById(newData);

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
