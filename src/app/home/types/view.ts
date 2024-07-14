export interface IUserProfileView {
  id: string;
  username: string;
  email: string;
  role: string;
  level: string;
  avatar_url: string;
}

export interface IPostView {
  id: number;
  title: string;
  description: string;
  created_at: string;
  user_id: string;
  count: number;
  img_url: string | null;
  profiles: IUserProfileView;
  keyword: string;
}
