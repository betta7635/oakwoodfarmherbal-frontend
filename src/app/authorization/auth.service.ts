import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, pipe, tap } from "rxjs";
import { User } from "../shared/user/user.model";

const AUTH_API_KEY = "55d75f7b520a109c9c1e7ca209c24bb8";
const SIGN_UP_URL = "https://localhost:3000/api/v1/users/create?";
const LOGIN_URL = "https://localhost:3000/api/v1/users/login?";

export interface AuthResponseData {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  expiry: string;
  token: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<User>(null);
  userToken: string = null;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>("SIGN_UP_URL + AUTH_API_KEY", {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        tap((responseData) => {
          const { email, id, expiry, token } = responseData;
          this.handleAuth(email, id, +expiry, token);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>("LOGIN_URL + AUTH_API_KEY", {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((responseData) => {
          const { email, id, expiry, token } = responseData;
          this.handleAuth(email, id, +expiry, token);
        })
      );
  }

  handleAuth(email: string, id: number, expiry: number, token: string) {
    const expDate = new Date(new Date().getTime() +expiry * 1000);
    const formUser = new User(email, id, token, JSON.stringify(expDate));
    this.currentUser.next(formUser);
    localStorage.setItem("userData", JSON.stringify(formUser));
  }

  logout() {
    // redirect to authorization page
    this.currentUser.next(null);
    this.router.navigate(['authorization']);
  }
}
