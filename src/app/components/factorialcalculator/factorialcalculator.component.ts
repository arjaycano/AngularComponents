import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number = 0;
  factorial: number | null = null;

  show() {
    if (this.number < 0) {
      this.factorial = null;
      return;
    }

    this.factorial = this.factorialRecursive(this.number);
  }

  private factorialRecursive(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorialRecursive(n - 1);
  }
}
