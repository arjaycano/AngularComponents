import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  currentDateTime: string = "";
  DateTime: boolean = false;

  show() {
    const now = new Date();
    console.log(this.DateTime = true);
    console.log(this.currentDateTime = now.toLocaleString());
  }
}
