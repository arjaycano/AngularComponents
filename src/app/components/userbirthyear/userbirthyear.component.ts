import { Component } from '@angular/core';

@Component({
  selector: 'app-userbirthyear',
  templateUrl: './userbirthyear.component.html',
  styleUrl: './userbirthyear.component.css'
})
export class UserbirthyearComponent {
  age: number | null = null;
  birthYear: number | null = null;

  show() {
    if (this.age) {
      const currentYear = new Date().getFullYear();
      this.birthYear = currentYear - this.age;
    }
  }
}
