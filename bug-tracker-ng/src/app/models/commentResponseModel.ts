import { User } from './user';

export interface CommentResponse {
  _id: string,
  comment: string,
  user?: User,
  likes?: [{
    user: string
  }],
  date?: Date
};