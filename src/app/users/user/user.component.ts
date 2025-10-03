import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserType } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class UserComponent {
  @Input({ required: true }) id!: UserType['id'];
  @Input({ required: true }) name!: UserType['name'];
  @Input({ required: true }) avatar!: UserType['avatar'];
  @Output() userSelected = new EventEmitter<UserType['id']>();

  emitUserSelected() {
    this.userSelected.emit(this.id);
  }
}
