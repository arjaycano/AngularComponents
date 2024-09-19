import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: string = "";

  show() {
    if (this.num1 === null || this.num2 === null) {
      this.result = 'Please enter both numbers.';
      return;
    }

    if (this.num2 === 0) {
      this.result = 'Division by zero is not allowed.';
      return;
    }

    this.result = (this.num1 % this.num2 === 0)
      ? `${this.num1} is divisible by ${this.num2}.`
      : `${this.num1} is not divisible by ${this.num2}.`;
  }
}
