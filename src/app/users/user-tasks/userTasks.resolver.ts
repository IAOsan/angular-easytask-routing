import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ITask } from '../../tasks/task.model';
import { TasksService } from '../../tasks/tasks.service';

export const userTasksResolveFn: ResolveFn<ITask[]> = (
  route: ActivatedRouteSnapshot
) => {
  const tasksService = inject(TasksService);
  const userId = route.paramMap.get('userId') || '';
  const tasks = tasksService.getTasksByUserId(userId);

  return tasks;
};
