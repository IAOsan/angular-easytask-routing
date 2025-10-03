import { UserType } from "../users/user/user.model";

export interface ITask {
  id: string;
  title: string;
  dueDate: string;
  summary: string;
  complete: boolean;
  userId: UserType['id'];
}