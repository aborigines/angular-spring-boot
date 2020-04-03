import { Component } from '@angular/core';
import { DEBUG_INFO_ENABLED, VERSION, API_URL } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-webpack-docker-nginx';
  DEBUG_INFO_ENABLED: boolean;
  VERSION: string;
  API_URL: string;

  constructor() {
    this.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED;
    this.VERSION = VERSION as string;
    this.API_URL = API_URL as string;
  }
}
