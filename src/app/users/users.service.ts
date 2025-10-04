import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { UserType } from './user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = DUMMY_USERS;

  getUserById(userId: UserType['id']): UserType | undefined {
    return this.users.find((u) => u.id === userId);
  }
}
