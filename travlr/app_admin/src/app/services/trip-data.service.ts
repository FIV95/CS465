import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Trip } from '../trip-listing/trip-listing.component';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  private getAuthHeaders() {
    const token = this.authenticationService.getToken();

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  public getTrips() {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  public getTrip(tripCode: string) {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${tripCode}`);
  }

  public addTrip(trip: Trip) {
    return this.http.post<Trip>(
      `${this.apiBaseUrl}/trips`,
      trip,
      this.getAuthHeaders()
    );
  }

  public updateTrip(trip: Trip) {
    return this.http.put<Trip>(
      `${this.apiBaseUrl}/trips/${trip.code}`,
      trip,
      this.getAuthHeaders()
    );
  }

  public deleteTrip(tripCode: string) {
    return this.http.delete(
      `${this.apiBaseUrl}/trips/${tripCode}`,
      this.getAuthHeaders()
    );
  }
}
