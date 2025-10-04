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
import { NoTaskComponent } from './tasks/noTask/noTask.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent } from './users/user-tasks/userTasks.component';
import { NewTaskComponent } from './tasks/newTask/newTask.component';

const routes: Routes = [
  { path: '', component: NoTaskComponent },
  {
    path: 'users/:userId',
    component: TasksComponent,
    children: [{ path: 'tasks', component: UserTasksComponent },
      {path: 'new-task', component: NewTaskComponent}
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
