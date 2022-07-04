import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  isLoginMode: boolean = true;
  isAuthenticated: boolean = false;
  errorMsg: string = null;
  authObsrv: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(formObj: NgForm) {
    if (!formObj.valid) return;
    const { email, password } = formObj.value;

    if (this.isLoginMode) {
      // login logic
      this.authObsrv = this.authService.login(email, password);
    } else {
      // signup logic
      this.authObsrv = this.authService.signup(email, password);
    }
    // error handling
    this.authObsrv.subscribe(
      (responseData) => {
        console.log("Success Response:", responseData);
        if (this.errorMsg) this.errorMsg = null;
        // redirect to profile
        this.router.navigate(['profile']);
      },
      (error) => {
        console.log("Error Response:", error);
        this.errorMsg = error.message;
      }
    );
    formObj.reset();
    }

    onCancel() {
      // redirect to home
      this.router.navigate(['home']);
    }

    onLogout() {
      this.authService.logout();
      // redirect to home
      this.router.navigate(['home']);
    }
  }
