import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  title = 'chatbox';
  message: string;
  messageReceived;
  messageArray = [];
  constructor(private chatService: ChatService) {
    const obs2 = chatService.userJoin();
    const obs = chatService.receive();
    obs2.subscribe((response) => {
      console.log(response);
      this.messageArray.push(response);
     });
    obs.subscribe((response) => {
     console.log(response);
     this.messageArray.push(response);
    });
  }

  send(): void {
   this.chatService.send(this.message);
  }

  ngOnInit() {
  }

}
