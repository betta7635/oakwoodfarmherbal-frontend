import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignup() {
    // redirect to authorization
    this.router.navigate(['/authorization']);
  }

  onLogin() {
    // redirect to authorization
    this.router.navigate(['/authorization']);
  }
}
