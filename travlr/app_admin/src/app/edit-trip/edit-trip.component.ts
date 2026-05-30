import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Trip } from '../trip-listing/trip-listing.component';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  trip: Trip = {
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
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('tripCode');

    if (tripCode) {
      this.tripDataService.getTrip(tripCode)
        .subscribe({
          next: (trip: Trip) => {
            this.trip = {
              ...trip,
              start: trip.start ? trip.start.substring(0, 10) : ''
            };
          },
          error: (err) => {
            console.error('Error loading trip:', err);
          }
        });
    }
  }

  public updateTrip(): void {
    this.tripDataService.updateTrip(this.trip)
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error updating trip:', err);
        }
      });
  }
}
