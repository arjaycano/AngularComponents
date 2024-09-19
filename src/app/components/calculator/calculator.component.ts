import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  divide() {
    this.result = this.firstNumber / this.secondNumber;
  }
}
