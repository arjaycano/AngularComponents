import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  simpleInterest: number | null = null;

  show() {
    if (this.principal === null || this.rate === null || this.time === null) {
      this.simpleInterest = null;
      return;
    }

    if (this.principal <= 0 || this.rate <= 0 || this.time <= 0) {
      this.simpleInterest = null;
      return;
    }

    this.simpleInterest = (this.principal * this.rate * this.time) / 100;
  }
}
