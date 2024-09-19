import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;

  show() {
    if (this.principal === null || this.rate === null || this.time === null || this.frequency === null) {
      this.compoundInterest = null;
      return;
    }

    if (this.principal <= 0 || this.rate <= 0 || this.time <= 0 || this.frequency <= 0) {
      this.compoundInterest = null;
      return;
    }

    const rateDecimal = this.rate / 100;

    const amount = this.principal * Math.pow(1 + rateDecimal / this.frequency, this.frequency * this.time);
    this.compoundInterest = amount - this.principal;
  }
}
