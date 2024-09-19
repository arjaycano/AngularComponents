import { Component } from '@angular/core';

@Component({
  selector: 'app-showemail',
  templateUrl: './showemail.component.html',
  styleUrl: './showemail.component.css'
})
export class ShowemailComponent {
  email: string = "";
  displayedEmail: string = "";

  show() {
    console.log(this.displayedEmail = this.email);
  }
}
