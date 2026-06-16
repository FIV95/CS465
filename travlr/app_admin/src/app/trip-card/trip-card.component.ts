import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Trip } from '../trip-listing/trip-listing.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() deleteRequested = new EventEmitter<string>();

  constructor(public authenticationService: AuthenticationService) { }

  public deleteTrip(): void {
    this.deleteRequested.emit(this.trip.code);
  }
}
