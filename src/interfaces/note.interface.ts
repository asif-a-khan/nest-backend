import { Document } from 'mongoose';

export interface Note extends Document {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}