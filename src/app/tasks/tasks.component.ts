import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SortDirectionType } from '../shared/shared.types';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class TasksComponent {
  @Input() sort: SortDirectionType = 'asc';
}
