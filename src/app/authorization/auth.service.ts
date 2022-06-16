import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, pipe, tap } from "rxjs";
import { User } from "../shared/user/user.model";

const AUTH_API_KEY = "55d75f7b520a109c9c1e7ca209c24bb8";
const SIGN_UP_URL = "https://localhost:3000/api/v1/users/create:signUp?key=";
const LOGIN_URL = "https://localhost:3000/api/v1/users/login:signInWithPassword?key=";

export interface AuthResponseData {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  expiry: string;
  value: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<User>(null);
  userToken: string = null;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>("SIGN_UP_URL + AUTH_API_KEY", {
      email: email,
      password: password,
      returnSecureToken: true,
    })
    .pipe(
      tap((responseData) => {
        const { email, id, expiry, value } = responseData;
        this.handleAuth(email, id, expiry, value);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
      email: email,
      password: password,
      returnSecureToken: true,
    })
    .pipe(
      tap((responseData) => {
        const { email, id, expiry, value } = responseData;
        this.handleAuth(email, id, expiry, value);
      })
    );
  }

  handleAuth(email: string, id: number, expiry: string, value: string) {
    const expDate = new Date(new Date().getTime() + (+expiry) * 1000);
    const formUser = new User(email, id, expiry, value);
    this.currentUser.next(formUser);
    localStorage.setItem("userData", JSON.stringify(formUser));
  }

  logout() {
    // redirect to authorization page

  }
}
