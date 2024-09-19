import { Component } from '@angular/core';

@Component({
  selector: 'app-showgoodbutton',
  templateUrl: './showgoodbutton.component.html',
  styleUrl: './showgoodbutton.component.css'
})
export class ShowgoodbuttonComponent {
  showGoodDay: boolean = false;
  goodDay: string = "";

  show() {
    console.log(this.showGoodDay = true);
    console.log(this.goodDay = "Good Day");
  }
}
