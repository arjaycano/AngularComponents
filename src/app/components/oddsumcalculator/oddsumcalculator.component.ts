import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null;
  oddNumbers: number | null = null;

  show() {
    if (this.number === null || this.number <= 0) {
      this.oddNumbers = null;
      return;
    }

    let sum = 0;
    for (let i = 1; i <= this.number; i += 2) {
      sum += i;
    }

    this.oddNumbers = sum;
  }
}
