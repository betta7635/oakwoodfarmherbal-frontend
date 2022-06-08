import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const AUTH_API_KEY = "55d75f7b520a109c9c1e7ca209c24bb8";
const SIGN_UP_URL = "https://localhost:3000/api/v1/users/create:signUp?key=";
const LOGIN_URL = "https://localhost:3000/api/v1/users/login:signInWithPassword?key=";

export interface AuthResponseData {
  id: number;
  email: string;
  password: string;
  token: object;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  login() {

  }

  handleAuth() {

  }

  logout() {

    // redirect to authorization page

  }
}
