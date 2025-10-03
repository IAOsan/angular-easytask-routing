import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class TasksComponent {}
