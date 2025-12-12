// Service contains the business logic for tasks
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return this.taskModel.findById(id).exec();
  }

  async create(data: { title: string; description?: string }): Promise<Task> {
    const newTask = new this.taskModel(data);
    return newTask.save();
  }

  async update(id: string, data: Partial<Task>): Promise<Task | null> {
    return this.taskModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<Task | null> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
