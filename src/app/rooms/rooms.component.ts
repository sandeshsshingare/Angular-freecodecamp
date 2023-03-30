import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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

  title: string = '';

  constructor(private roomService: RoomsService) {
    console.log(this.roomService.getroom());
    this.roomsList = this.roomService.getroom();
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
  ngOnInit(): void {
    // this.roomService.getroom().subscribe((rooms) => {
    // this.roomsList = rooms;
    // console.log(this.roomService.gettitle());
    // console.log(this.roomService.gettitle());
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
    const addroom1: RoomsList = {
      roomNumber: '4',
      roomType: 'Fresh',
      amenities: 'Air Conditioner with Washing Machine',
      price: 4567,
      photos: 'hello photos',
      checkInTime: new Date('12/nov/2023'),
      checkOutTime: new Date('11/Dec/2022'),
      rating: 5,
    };
    // this.roomsList.push(addroom);
    console.log(this.roomsList);

    this.roomsList = [...this.roomsList, addroom1];
  }
}
