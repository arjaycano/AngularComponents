import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  dollarCurrency: number | null = null;
  phpCurrency: number | null = null;
  exchangeRate: number = 56;

  show() {
    if (this.dollarCurrency !== null) {
      this.phpCurrency = this.dollarCurrency * this.exchangeRate;
    }
  }
}
