import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../trip-listing/trip-listing.component';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input() trip!: Trip;
}
