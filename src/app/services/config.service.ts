import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject (RouteConfigToken) private configToken : RouteConfig) {
    console.log('Config Service Initilized');
    console.log(this.configToken);
    
  }
}
