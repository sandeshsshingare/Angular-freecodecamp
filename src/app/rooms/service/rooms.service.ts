import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { RoomsList } from '../rooms';
// import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    // console.log(environment.apiEndpoint);
    console.log('Api endpoint');

    console.log(this.config.apiEndpoint);
  }
  roomList: RoomsList[] = [
    {
      roomNumber: '1',
      roomType: 'Fresh1',
      amenities: 'Air Conditioner with Washing Machine',
      price: 4567,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 5,
    },
    {
      roomNumber: '2',
      roomType: 'Fres2',
      amenities: 'Air Conditioner with Washing Machine',
      price: 4567,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 5,
    },
    {
      roomNumber: '3',
      roomType: 'Fres3',
      amenities: 'Air Conditioner with Washing Machine',
      price: 4567,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 5,
    },
  ];
  title = 'hello sandesh this is service example';
  gettitle() {
    return this.title;
  }
  getroom() {
    console.log('hello');

    return this.roomList;
  }
}
