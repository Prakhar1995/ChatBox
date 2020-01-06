import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'room',
    component: ChatroomComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class ApproutingModule { }
