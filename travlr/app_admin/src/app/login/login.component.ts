import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService, UserCredentials } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: UserCredentials = {
    email: '',
    password: ''
  };

  errorMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public login(): void {
    this.authenticationService.login(this.credentials)
      .subscribe({
        next: (response) => {
          this.authenticationService.saveToken(response.token);
          this.router.navigate(['']);
        },
        error: () => {
          this.errorMessage = 'Login failed. Please check your email and password.';
        }
      });
  }
}
