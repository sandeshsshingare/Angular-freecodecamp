import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room, RoomsList } from '../rooms';
import { environment } from '../../../environments/environment';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    // console.log(environment.apiEndpoint);
    // console.log('Api endpoint', environment.apiEndpoint);

    console.log(this.config.apiEndpoint);
  }
  roomsList: RoomsList[] = [];
  // headers = new HttpHeaders({ token: '122343454dkjkfg' });
  getRooms$ = this.http.get<RoomsList[]>('/api/rooms').pipe(shareReplay(1));

  title = 'hello sandesh this is service example';
  gettitle() {
    return this.title;
  }
  getroom() {
    // console.log('hello');
    console.log(this.http.get<RoomsList[]>('/api/rooms'));

    return this.http.get<RoomsList[]>('/api/rooms');
  }

  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('/api/rooms', room);
  }
  editRoom(room: RoomsList) {
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  delete(id: string) {
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
