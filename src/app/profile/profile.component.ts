import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user/user.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
