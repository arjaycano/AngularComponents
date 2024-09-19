import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  selectedCurrency: string = 'USD';
  formattedAmount: string = "";

  conversionRates: { [key: string]: number } = {
    USD: 1,
    PHP: 56,
    EUR: 0.91
  };

  show() {
    if (this.amount === null || this.amount <= 0) {
      this.formattedAmount = "";
      return;
    }

    const rate = this.conversionRates[this.selectedCurrency];
    if (rate) {
      const convertedAmount = this.amount * rate;
      this.formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrency
      }).format(convertedAmount);
    } else {
      this.formattedAmount = 'Invalid currency';
    }
  }
}
