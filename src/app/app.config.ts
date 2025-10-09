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
import { NewTaskComponent } from './tasks/newTask/newTask.component';
import { NoTaskComponent } from './tasks/noTask/noTask.component';
import { TasksComponent } from './tasks/tasks.component';
import { userNameResolveFn } from './tasks/userName.resolver';
import { UserTasksComponent } from './users/user-tasks/userTasks.component';
import { userTasksResolveFn } from './users/user-tasks/userTasks.resolver';

const routes: Routes = [
  { path: '', component: NoTaskComponent },
  {
    path: 'users/:userId',
    component: TasksComponent,
    resolve: {
      userName: userNameResolveFn,
    },
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
    ],
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
