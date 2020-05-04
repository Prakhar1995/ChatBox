import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewInit , AfterViewChecked {


  @ViewChild('scrollMe')
  private myScrollContainer: ElementRef;
  title = 'chatbox';
  message: string;
  messageReceived;
  messageArray = [];
  room;

  constructor(private chatService: ChatService) {
    const nd = new Date();
    const obs2 = chatService.userJoin();
    const obs = chatService.receive();
    obs2.subscribe((response) => {
      console.log(response);
      this.room = response['chatRooms'];
      response['time']= nd.getHours() + ':' + nd.getMinutes();
      this.messageArray.push(response);

     });
    obs.subscribe((response) => {
     console.log(response);
     response['time'] = nd.getHours() + ':' + nd.getMinutes();
     this.messageArray.push(response);
    });
  }
  
  send(): void {
   const nd = new Date();
   this.chatService.send(this.message);
   this.messageArray.push( { user : 'You',
chatRooms : 'User',
message:  this.message,
time :  nd.getHours() + ':' + nd.getMinutes()
  } );
   this.message = '';
}

  ngOnInit() {
    this.scrollToBottom();
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
}

}
