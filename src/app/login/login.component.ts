import { Component, OnInit } from '@angular/core';
import { ChatService } from './../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  room = '';
  constructor(private chatService: ChatService, private router: Router) {}

  submit(): void {
    if ((this.userName === '') || (this.room === '')) {
      alert('Empty fields not Allowed');
    } else {

    this.chatService.senduser(this.userName, this.room);
    console.log(this.userName, this.room);
    this.router.navigate(['/room']);

    }
  }
  ngOnInit() {
  }

}
