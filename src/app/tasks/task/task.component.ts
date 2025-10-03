import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) id!: ITask['id'];
  @Input({ required: true }) title!: ITask['title'];
  @Input({ required: true }) summary!: ITask['summary'];
  @Input({ required: true }) dueDate!: ITask['dueDate'];
}
