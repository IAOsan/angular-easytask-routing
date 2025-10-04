import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserType } from '../../users/user/user.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrl: './newTask.component.css',
  imports: [FormsModule, RouterLink],
})
export class NewTaskComponent {
  @Input() userId: UserType['id'] = '';
  today = new Date().toISOString().split('T')[0];

  constructor(private tasksService: TasksService, private router: Router) {}

  handleSubmit(form: NgForm) {
    if (form.invalid) return;

    this.tasksService.addNewTask({ ...form.value, userId: this.userId });
    this.router.navigate([`/users/${this.userId}/tasks`]);
  }
}
