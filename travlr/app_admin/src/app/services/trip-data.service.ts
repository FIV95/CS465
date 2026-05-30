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

  public getTrip(tripCode: string) {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${tripCode}`);
  }

  public addTrip(trip: Trip) {
    return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
  }

  public updateTrip(trip: Trip) {
    return this.http.put<Trip>(`${this.apiBaseUrl}/trips/${trip.code}`, trip);
  }

  public deleteTrip(tripCode: string) {
    return this.http.delete(`${this.apiBaseUrl}/trips/${tripCode}`);
  }
}
