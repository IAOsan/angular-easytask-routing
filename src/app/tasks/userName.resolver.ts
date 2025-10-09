import { inject, Type } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../users/users.service';
import { SITE_NAME } from '../app.constants';

function getUser(route: ActivatedRouteSnapshot) {
  const usersService = inject(UsersService as Type<UsersService>);
  const userId = route.paramMap.get('userId') || '';
  return usersService.getUserById(userId);
}

export const userNameResolveFn: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => {
  const user = getUser(route);

  return user?.name || '';
};

export const titleResolveFn: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const user = getUser(route);

  if (user) {
    return `${SITE_NAME} | ${user.name}'s tasks`;
  }

  return `${SITE_NAME} | user tasks`;
};
