import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SortDirectionType } from '../../shared/shared.types';
import { ITask } from '../../tasks/task.model';
import { TaskComponent } from '../../tasks/task/task.component';
import { TasksService } from '../../tasks/tasks.service';
import { UserType } from '../user/user.model';

@Component({
  selector: 'app-user/tasks',
  templateUrl: './userTasks.component.html',
  imports: [TaskComponent],
})
export class UserTasksComponent {
  @Input() userId: UserType['id'] = '';
  @Input() sort: SortDirectionType = 'asc';
  @Input() tasks: ITask[] = [];

  constructor(private tasksService: TasksService, private router: Router) {}

  completeTask(taskId: ITask['id']): void {
    this.tasksService.completeTaskById(taskId);
  }

  refreshTasksView(): void {
    const path = ['users', this.userId, 'tasks'];
    const navigationExtras: NavigationExtras = {
      onSameUrlNavigation: 'reload',
    };

    this.router.navigate(path, navigationExtras);
  }

  handleTaskCompletion(taskId: ITask['id']): void {
    this.completeTask(taskId);
    this.refreshTasksView();
  }
}
