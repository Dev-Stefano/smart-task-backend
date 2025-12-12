// MongoDB schema for users
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string; // will be stored as a hashed password
}

export const UserSchema = SchemaFactory.createForClass(User);
