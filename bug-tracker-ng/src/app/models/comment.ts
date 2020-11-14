export interface Comment {
  comment: string,
  user?: string,
  likes?: [
    user: string
  ],
  date?: Date
};