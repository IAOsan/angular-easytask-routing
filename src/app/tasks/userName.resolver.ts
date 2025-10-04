import { inject, Type } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UsersService } from '../users/users.service';

export const userNameResolveFn: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => {
  const usersService = inject(UsersService as Type<UsersService>);
  const userId = route.paramMap.get('userId') || '';
  const user = usersService.getUserById(userId);

  return user?.name || '';
};
