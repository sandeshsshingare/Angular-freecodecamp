import { HttpEventType } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { catchError, map, Observable, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomsList } from './rooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // providers: [RoomsService],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelname = 'Hilton Garden';

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  numberOfRooms = 10;

  flag: boolean = false;

  roomsint: Room = {
    totalRooms: 20,
    availableRooms: 10,
  };
  roomsList: RoomsList[] = [];

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });
  totalBytes = 0;
  subscription!: Subscription;
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      console.log(err);
      return [];
    })
  );

  roomsCount$ = this.roomService.getRooms$.pipe(map((rooms) => rooms.length));

  ngOnInit(): void {
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }

      console.log(event);
    });
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));
    // this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomsList = rooms;
    //   console.log(this.roomService.gettitle());
    // }
    // );
    // console.log(this.roomService.gettitle());
  }
  title: string = '';

  constructor(private roomService: RoomsService) {
    // console.log(this.roomService.getroom());
    // console.log(this.roomService.getroom());
    console.log(this.roomsList);
  }
  ngAfterViewInit() {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms After view init';
    this.headerChildrenComponent.last.title = 'Last Header';
    this.headerChildrenComponent.first.title = 'First Header';
    // this.headerChildrenComponent.get().title = "get by index header"
  }
  ngDoCheck(): void {
    console.log('do check is called');
  }

  // console.log(this.headerComponent);

  toggle() {
    this.flag = !this.flag;
    this.title = 'change detected';
    return this.flag;
  }
  selectedRooms!: RoomsList;

  selectRooms(room: RoomsList) {
    console.log(room);
    this.selectedRooms = room;
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: '4',
      roomType: 'Fresh',
      amenities: 'Air Conditioner with Washing Machine',
      price: 11111,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 5,
    };
    // this.roomsList.push(addroom);
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
    console.log(this.roomsList);

    // this.roomsList = [...this.roomsList, addroom1];
  }

  editRoom() {
    const room: RoomsList = {
      roomNumber: '1',
      roomType: 'Fresh',
      amenities: 'Air Conditioner with Washing Machine',
      price: 444555,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 4.5,
    };
    this.roomService.editRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  deleteRoom() {
    this.roomService.delete('3').subscribe((data) => {
      this.roomsList = data;
    });
  }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
