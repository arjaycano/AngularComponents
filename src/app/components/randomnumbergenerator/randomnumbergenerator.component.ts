import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  min: number = 1;
  max: number = 20;
  randomNumber: number | null = null;

  show() {
    if (this.min >= this.max) {
      this.randomNumber = null;
      return;
    }
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
