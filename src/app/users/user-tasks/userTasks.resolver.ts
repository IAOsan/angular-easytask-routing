import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ITask } from '../../tasks/task.model';
import { TasksService } from '../../tasks/tasks.service';
import { SortDirectionType } from '../../shared/shared.types';

const sortStrategies: Record<SortDirectionType, (tasks: ITask[]) => ITask[]> = {
  asc: (tasks: ITask[]) => tasks.reverse(),
  desc: (tasks: ITask[]) => tasks,
};

function parseSortDirection(value: string | null): SortDirectionType | null {
  return value === 'asc' || value === 'desc' ? value : null;
}

function sortTasks(
  tasks: ITask[],
  direction: SortDirectionType | null
): ITask[] {
  if (!direction) return sortStrategies.desc(tasks);

  return sortStrategies[direction]?.(tasks) || sortStrategies.desc(tasks);
}

export const userTasksResolveFn: ResolveFn<ITask[]> = (
  route: ActivatedRouteSnapshot
) => {
  const tasksService = inject(TasksService);
  const userId = route.paramMap.get('userId') || '';
  const sortDirection = parseSortDirection(route.queryParamMap.get('sort'));
  const tasks = tasksService.getTasksByUserId(userId);

  return sortTasks(tasks, sortDirection);
};
