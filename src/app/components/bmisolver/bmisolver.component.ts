import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;

  show() {
    if (this.height === null || this.weight === null) {
      this.bmi = null;
      return;
    }
    this.bmi = this.weight / (this.height * this.height);
  }
}
