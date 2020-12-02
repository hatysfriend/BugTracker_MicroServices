import { CommentRequest } from './commentRequestModel';

export interface Bug {
  _id?: string, 
  name: string,
  author: string,
  status: string,
  description?: string
  tags?: [{
    name: string,
    colour: string
  }],
  date?: Date,
  comments?: CommentRequest[],
  archived?: boolean
};