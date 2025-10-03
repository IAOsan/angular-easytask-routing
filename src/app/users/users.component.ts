import { Component, Input } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserType } from './user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [UserComponent],
})
export class UsersComponent {
  @Input({ required: true }) users: UserType[] = [];
}
