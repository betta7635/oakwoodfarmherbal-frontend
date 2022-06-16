import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  isLoginMode: boolean = true;
  error: string;
  authObsrv: Observable<AuthResponseData>;

  constructor(private authService: AuthService) { }

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
      this.authObsrv = this.authService.signUp(email, password);
    }
    this.authObsrv.subscribe(
      (responseData) => {
        console.log("success response:", responseData);
        if (this.error) this.error = null;
      },
      (error) => {
        console.log("error response:", error);
        this.error = "An error has occurred!";
      }
    );
    formObj.reset();
  }
}
