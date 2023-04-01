import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      // alert('hello')
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  @Input() rooms: RoomsList[] | null = [];

  @Input() title = '';

  @Input() getrating = 0;

  @Output() selectedRooms = new EventEmitter();

  selectRoom(roomss: RoomsList) {
    this.selectedRooms.emit(roomss);
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
