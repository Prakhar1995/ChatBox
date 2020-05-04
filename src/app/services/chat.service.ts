import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
socket: any;
user: string;
chatRooms: string;
  constructor() {
  this.socket = io('https://infinite-harbor-89435.herokuapp.com/');
  console.log('service');

  }
  senduser(userName, room) {
    this.user = userName;
    this.chatRooms = room;
    this.socket.emit('join', { user : userName, chatRooms: room});
  }
  send(messages) {
    console.log(messages);
    const data = { user : this.user, chatRooms: this.chatRooms, message : messages}
    this.socket.emit('message', data);
  }
  userJoin() {
    const customObservable = new Observable(observer => {
      this.socket.on('join', (data) => {
        observer.next(data);
      });
     });
    return customObservable;

  }
  receive() {
    const customObservable = new Observable(observer => {
     this.socket.on('messageemit', (data) => {
       observer.next(data);
     });
    });
    return customObservable;
  }

}
