import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travlr-admin';

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
