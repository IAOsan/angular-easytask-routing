import { Injectable } from '@angular/core';
import { UserType } from '../users/user/user.model';
import { ITask } from './task.model';
import { DUMMY_TASKS } from '../../dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = DUMMY_TASKS;

  getTasksByUserId(userId: UserType['id']): ITask[] {
    return this.tasks.filter((t) => t.userId == userId);
  }

  completeTaskById(taskId: ITask['id']): void {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }
}
