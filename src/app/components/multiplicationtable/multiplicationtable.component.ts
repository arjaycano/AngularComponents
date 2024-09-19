import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number = 0;
  multiplicationTable: number[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    console.log(this.multiplicationTable = []);

    for (let i = 1; i <= 10; i++) {
      const row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(i * j);
      }
      console.log(this.multiplicationTable.push(row));
    }
  }
}
