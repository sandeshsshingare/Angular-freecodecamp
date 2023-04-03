import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id: number = 0;
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));
  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomid'];
    // this.id$ =
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid'];
    //   console.log(params);
    // });
  }
}
