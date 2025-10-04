import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../tasks/tasks.service';
import { UserType } from '../user/user.model';
import { ITask } from '../../tasks/task.model';
import { TaskComponent } from '../../tasks/task/task.component';
import { SortDirectionType } from '../../shared/shared.types';

@Component({
  selector: 'app-user/tasks',
  templateUrl: './userTasks.component.html',
  imports: [TaskComponent],
})
export class UserTasksComponent implements OnChanges {
  @Input() userId: UserType['id'] = '';
  @Input() sort: SortDirectionType = 'asc';
  tasks: ITask[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const isUserChanged = changes['userId']?.currentValue && this.userId;
    const isSortChanged = changes['sort']?.currentValue && this.sort;

    if (isUserChanged || isSortChanged) this.loadTasks(this.userId);
  }

  loadTasks(userId: ITask['id']): void {
    const tasks = this.tasksService.getTasksByUserId(userId);
    this.tasks = this.sortTasks(tasks, this.sort);
  }

  sortTasks(tasks: ITask[], sort: SortDirectionType): ITask[] {
    return sort === 'asc' ? tasks.reverse() : tasks;
  }

  handleTaskCompletion(taskId: ITask['id']): void {
    this.tasksService.completeTaskById(taskId);
    this.loadTasks(this.userId);
  }
}
