import { LEVEL, ROLE } from "@/types/enum";

export interface IHomePostFilterParams {
  level: LEVEL;
  role: ROLE;
}

export interface IHomePostParams {
  id: number;
  title: string;
  description: string;
  keyword: string;
  user_id: string;
  count: number;
  img_url: string | null;
}