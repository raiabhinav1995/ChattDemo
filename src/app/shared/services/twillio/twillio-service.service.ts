import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwillioService{
  addChannel(channelName)
  {
    console.log('To be added '+channelName);
    // To be Implemented
  }
  constructor() { }
}
