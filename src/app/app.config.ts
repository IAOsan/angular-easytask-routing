import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { NotFoundComponent } from './notFound/notFound.component';
import { NewTaskComponent } from './tasks/newTask/newTask.component';
import { NoTaskComponent } from './tasks/noTask/noTask.component';
import { TasksComponent } from './tasks/tasks.component';
import { titleResolveFn, userNameResolveFn } from './tasks/userName.resolver';
import { UserTasksComponent } from './users/user-tasks/userTasks.component';
import { userTasksResolveFn } from './users/user-tasks/userTasks.resolver';
import { SITE_NAME } from './app.constants';

const routes: Routes = [
  { path: '', component: NoTaskComponent, title: SITE_NAME },
  {
    path: 'users/:userId',
    component: TasksComponent,
    resolve: {
      userName: userNameResolveFn,
    },
    title: titleResolveFn,
    children: [
      {
        path: 'tasks',
        component: UserTasksComponent,
        resolve: {
          tasks: userTasksResolveFn,
        },
        runGuardsAndResolvers: 'always',
      },
      { path: 'new-task', component: NewTaskComponent },
      {
        path: '**',
        redirectTo: 'tasks',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: `${SITE_NAME} | Not Found`
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
  ],
};
