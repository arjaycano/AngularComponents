import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = "";
  password: string = "";

  onSubmit() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
