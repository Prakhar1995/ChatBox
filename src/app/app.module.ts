import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ApproutingModule } from './approuting.module';
import { ChatroomComponent } from './chatroom/chatroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
