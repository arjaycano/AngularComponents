import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciSequence: number[] = [];

  show() {
    if (this.n === null || this.n <= 0) {
      this.fibonacciSequence = [];
      return;
    }

    this.fibonacciSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < this.n; i++) {
      this.fibonacciSequence.push(a);
      let next = a + b;
      a = b;
      b = next;
    }
  }
}
