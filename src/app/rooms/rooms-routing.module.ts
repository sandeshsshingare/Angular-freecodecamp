import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      { path: 'add', component: RoomsAddComponent },
      { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
  // { path: 'rooms/:roomid', component: RoomsBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
