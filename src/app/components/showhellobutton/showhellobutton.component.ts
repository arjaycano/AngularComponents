import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {

  showHelloWorld: boolean = false;
  helloWorld: string = "";

  show() {
    console.log(this.showHelloWorld = true);
    console.log(this.helloWorld = "Hello World");
  }
}
