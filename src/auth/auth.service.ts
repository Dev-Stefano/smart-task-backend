// Service contains the business logic for authentication
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(data: { username: string; password: string }) {
    // TODO: Save user to DB with hashed password
    return { message: 'User registered successfully', user: data.username };
  }

  async login(data: { username: string; password: string }) {
    // TODO: Validate user and return JWT token
    return { message: 'Login successful', token: 'fake-jwt-token' };
  }
}
