import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trip } from '../trip-listing/trip-listing.component';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public getTrips() {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }
}
