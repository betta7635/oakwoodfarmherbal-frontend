import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const AUTH_API_KEY = "55d75f7b520a109c9c1e7ca209c24bb8";
const SIGN_UP_URL = "https://localhost:3000/api/v1/users/create:signUp?key=";
const LOGIN_URL = "https://localhost:3000/api/v1/users/login:signInWithPassword?key=";

export interface AuthResponseData {
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  user_id: number;
  created_at: string;
  expiry: string;
  revocation_date: string;
  updated_at: string;
  value: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>("SIGN_UP_URL + AUTH_API_KEY",
    {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    // redirect to profile page??

  }

  login() {

    // redirect to profile page

  }

  handleAuth() {

  }

  logout() {

    // redirect to authorization page

  }
}
