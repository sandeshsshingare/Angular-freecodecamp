import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}
  msg: string = 'logger service';
  log(msg: string) {
    console.log(msg);
  }
}
