import { Component } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})
export class Counter2Component {
  counter2: number = 0;

  show() {
    console.log(this.counter2--);
  }
}
