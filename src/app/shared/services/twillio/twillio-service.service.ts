import { Injectable, EventEmitter } from '@angular/core';
import {Client} from 'twilio-chat';
import {Channel} from 'twilio-chat/lib/channel';
import { Router, RouterModule } from '@angular/router';
import * as Twilio from 'twilio-chat';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class TwillioService{
  channel: Channel;
  chatClient: Client;
  chatConnectedEmitter: EventEmitter<any> = new EventEmitter<any>();
  chatDisconnectedEmitter: EventEmitter<any> = new EventEmitter<any>();
  //version: string;
  constructor(private router: Router)
  {

  }
  conn(token)
  {
    Client.create(token)
  }
  get _version()
  {
    return 1;
  }
  get _connectionState()
  {
    return this.chatClient.connectionState;
  }


}
// var a=new TwillioService();
// a.hi();
