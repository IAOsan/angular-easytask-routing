import {
  Component,
  Input, OnInit
} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SortDirectionType } from '../shared/shared.types';
import { UserType } from '../users/user/user.model';
import { UsersService } from '../users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class TasksComponent implements OnInit {
  @Input() sort: SortDirectionType = 'asc';
  @Input() userId: UserType['id'] = '';
  userName: UserType['name'] = '';
  paramSubscription: Subscription | null = null;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe((params) => {
      const userId = params.get('userId') || '';

      if (!userId) return;

      const user = this.usersService.getUserById(userId);
      this.userName = user?.name || this.userName;
    });
  }
}
