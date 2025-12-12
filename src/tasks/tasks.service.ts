import { Injectable } from '@nestjs/common';

interface Task {
  id: string;
  title: string;
  description?: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  create(data: { title: string; description?: string }): Task {
    const newTask: Task = {
      id: (this.tasks.length + 1).toString(),
      title: data.title,
      description: data.description,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, data: { title?: string; description?: string }): Task | undefined {
    const task = this.findOne(id);
    if (task) {
      task.title = data.title ?? task.title;
      task.description = data.description ?? task.description;
    }
    return task;
  }

  remove(id: string): Task | undefined {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      const [removed] = this.tasks.splice(index, 1);
      return removed;
    }
    return undefined;
  }
}
