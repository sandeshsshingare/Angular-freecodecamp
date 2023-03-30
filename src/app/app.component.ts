import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: ['h1{color:green}'],
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(
    @Optional() private loggerservice: LoggerService,
    private http: HttpClient
  ) {
    this.getData();
  }
  ngOnInit(): void {
    this.loggerservice?.log('AppComponent.ngOnInit()');
    // throw new Error('Method not implemented.');
  }
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 100;
  }

  @ViewChild('name', { static: true }) name = ElementRef;
  title = 'First-project';

  role = 'admin';
  data: any;
  getData() {
    let url = 'https://fakestoreapi.com/products';
    this.http.get(url).subscribe((k) => {
      console.log(k);
    });
  }
}
