import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserCredentials {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl = 'http://localhost:3000/api';
  private tokenKey = 'travlr-token';

  constructor(private http: HttpClient) { }

  public login(user: UserCredentials) {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/login`, user);
  }

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    return token.length > 0;
  }
}
