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
  view: number;
  img_url: string | null;
  profiles: IUserProfileView;
  keyword: string;
}

export interface ICommentView {
  id: number;
  created_at: string;
  content: string;
  post_id: number;
  user_id: number;
  profiles: IUserProfileView;
}

export interface ISubCommentView {
  id: number;
  created_at: string;
  content: string;
  comment_id: number;
  user_id: number;
  profiles: IUserProfileView;
}
