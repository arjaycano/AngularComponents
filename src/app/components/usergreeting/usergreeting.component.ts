import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  userName: string = "";
  personalizedGreeting: string = "";

  show() {
    if (this.userName) {
      this.personalizedGreeting = `Good day and welcome, ${this.userName}!`;
    }
  }
}
