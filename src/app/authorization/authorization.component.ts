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
  error: string;
  authObsrv: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(formObj: NgForm) {
    if (!formObj.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    if (!formObj.valid) return;
    const { email, password } = formObj.value;

    if (this.isLoginMode) {
      // login logic
      this.authObsrv = this.authService.login(email, password);
    } else {
      // signup logic
      this.authObsrv = this.authService.signUp(email, password);
    }
    this.authObsrv.subscribe(
      (responseData) => {
        console.log("success response:", responseData);
        if (this.error) this.error = null;
        this.router.navigate(['profile']);
      },
      (error) => {
        console.log("error response:", error);
        this.error = "An error has occurred!";
      }
    );
    formObj.reset();
  }

  onCancel() {
    // redirect to home
    this.router.navigate(['home']);
  }
}
