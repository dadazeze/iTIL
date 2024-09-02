import { LEVEL, ROLE } from '@/shared/types/enum';

export interface IHomePostFilterParams {
  level: LEVEL;
  role: ROLE;
}

export interface IHomePostParams {
  title: string;
  description: string;
  keyword: string;
  user_id: string;
  view: number;
  img_url: string | null;
}
