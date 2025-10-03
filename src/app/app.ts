import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../dummy-users';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HeaderComponent, UsersComponent, RouterOutlet],
})
export class App {
  protected readonly title = signal('easytask-routing-angular');
  users = DUMMY_USERS;
}
