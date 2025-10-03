import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../tasks/tasks.service';
import { UserType } from '../user/user.model';
import { ITask } from '../../tasks/task.model';
import { TaskComponent } from '../../tasks/task/task.component';

@Component({
  selector: 'app-user/tasks',
  templateUrl: './userTasks.component.html',
  imports: [TaskComponent]
})
export class UserTasksComponent implements OnChanges {
  @Input() userId: UserType['id'] = '';
  tasks: ITask[] = [];

  constructor(
    private tasksService: TasksService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId'] && this.userId) {
      this.loadTasks(this.userId);
    }
  }

  loadTasks(userId: ITask['id']): void {
    this.tasks = this.tasksService.getTasksByUserId(userId);
  }
}
