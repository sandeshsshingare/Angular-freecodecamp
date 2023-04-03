import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from '../service/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomsList = {
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {}
  sucessMessage: string = '';

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.sucessMessage = 'Room Added Successfully';
      roomsForm.resetForm({
        roomType: '',
        amenities: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
      });
    });
  }
}
