import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  isLoginMode: boolean = true;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      // login logic

    } else {
      // signup logic
      this.authService.signUp(email, password).subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          console.log(error);
          this.error = 'An error has occurred!';
        }
      )
    }
    form.reset();
  }
}
