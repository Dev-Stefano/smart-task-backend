import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // Add feature modules here
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
