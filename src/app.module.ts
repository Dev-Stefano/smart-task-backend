// Root module of the application
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Connect to MongoDB Atlas (replace with your real URI in .env)
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/smart-task'),
    TasksModule,   // feature module for tasks
    AuthModule,    // feature module for authentication
  ],
})
export class AppModule {}
