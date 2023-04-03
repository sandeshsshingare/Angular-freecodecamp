import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomsComponent,
    RoomsListComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
})
export class RoomsModule {}
