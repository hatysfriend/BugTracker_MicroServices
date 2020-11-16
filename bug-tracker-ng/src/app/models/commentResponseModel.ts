import { User } from './user';

export interface CommentResponse {
  comment: string,
  user?: User,
  likes?: [
    user: User
  ],
  date?: Date
};