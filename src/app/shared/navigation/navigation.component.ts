import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }
}
