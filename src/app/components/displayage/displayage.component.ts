import { Component } from '@angular/core';

@Component({
  selector: 'app-displayage',
  templateUrl: './displayage.component.html',
  styleUrl: './displayage.component.css'
})
export class DisplayageComponent {
  displayAge: number = 0;
  resultAge: number = 0;

  show(): void {
    console.log(this.resultAge = this.displayAge);
    console.log(this.displayAge);
  }
}
