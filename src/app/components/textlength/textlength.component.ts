import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputText: string = '';
  textLength: number | null = null;

  show() {
    console.log(this.textLength = this.inputText.length);
  }
}
