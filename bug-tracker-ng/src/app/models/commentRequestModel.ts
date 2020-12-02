export interface CommentRequest {
  comment: string,
  user?: string,
  likes?: [{
    user: string
  }],
  date?: Date
};