import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SatellitesService {


  private url = 'https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }
}
