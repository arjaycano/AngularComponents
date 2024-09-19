import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  temperature: number = 0;
  convertedTemperature: number | null = null;
  temperatureType: string = 'CtoF';

  show() {
    if (this.temperatureType === 'CtoF') {
      // Convert Celsius to Fahrenheit
      this.convertedTemperature = (this.temperature * 9/5) + 32;
    } else if (this.temperatureType === 'FtoC') {
      // Convert Fahrenheit to Celsius
      this.convertedTemperature = (this.temperature - 32) * 5/9;
    }
  }
}
