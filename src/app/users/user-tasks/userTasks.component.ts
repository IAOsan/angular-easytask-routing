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
export class UserTasksComponent {
  @Input() userId: UserType['id'] = '';
  @Input() sort: SortDirectionType = 'asc';
  @Input() tasks: ITask[] = [];

  constructor(private tasksService: TasksService) {}

  loadTasks(userId: ITask['id']): void {
    this.tasks = this.tasksService.getTasksByUserId(userId);
  }

  handleTaskCompletion(taskId: ITask['id']): void {
    this.tasksService.completeTaskById(taskId);
    this.loadTasks(this.userId);
  }
}
