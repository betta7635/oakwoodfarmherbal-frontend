import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myUsers: User[] = [];
  user: User;
  selectedUser: User;
  isAuthenticated: boolean = false;
  currentUser: boolean = false;
  idx: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.user = this.userService.getUser(this.idx);
    });
    this.myUsers = this.userService.getUsers();
    this.userService.userSelected.subscribe((user: User) => {
      this.selectedUser = user;
    });
    this.userService.userChanged.subscribe((users: User[]) => {
      this.myUsers = users;
    });
  }

}
