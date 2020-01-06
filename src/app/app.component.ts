import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbox';
  message: string;
  messageReceived;
  messageArray = [];
  constructor(private chatService: ChatService) {
    const obs = chatService.receive();
    obs.subscribe((response) => {
     console.log(response);
     this.messageArray.push(response);
    });
  }

  send(): void {
   this.chatService.send(this.message);
  }


}
