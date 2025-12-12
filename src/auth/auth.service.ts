// Service contains the business logic for authentication
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(data: { username: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new this.userModel({ username: data.username, password: hashedPassword });
    await newUser.save();
    return { message: 'User registered successfully', user: data.username };
  }

  async login(data: { username: string; password: string }) {
    const user = await this.userModel.findOne({ username: data.username }).exec();
    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      return { message: 'Invalid credentials' };
    }

    const token = jwt.sign({ username: user.username, sub: user._id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return { message: 'Login successful', token };
  }
}
