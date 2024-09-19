import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: string = "";

  show() {
    if (this.num1 === null || this.num2 === null) {
      this.result = 'Enter both numbers first.';
      return;
    }

    if (this.num2 === 0) {
      this.result = 'The second number cannot be zero.';
      return;
    }

    if (this.num1 % this.num2 === 0) {
      this.result = `${this.num1} is a multiple of ${this.num2}.`;
    } else {
      this.result = `${this.num1} is not a multiple of ${this.num2}.`;
    }
  }
}
