import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';

export class Trip {
  _id?: string;
  code!: string;
  name!: string;
  length!: string;
  start!: string;
  resort!: string;
  perPerson!: string;
  image!: string;
  description!: string;
}

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripDataService: TripDataService) { }

  ngOnInit(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (trips: Trip[]) => {
          this.trips = trips;
        },
        error: (err) => {
          console.error('Error loading trips:', err);
        }
      });
  }
}
