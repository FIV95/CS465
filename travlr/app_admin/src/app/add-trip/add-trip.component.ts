import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Trip } from '../trip-listing/trip-listing.component';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {
  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: 'reef1.jpg',
    description: ''
  };

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) { }

  public addTrip(): void {
    this.tripDataService.addTrip(this.newTrip)
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error adding trip:', err);
        }
      });
  }
}
