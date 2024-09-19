import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})
export class WordreverserComponent {
  inputWord: string = "";
  reversedWord: string = "";

  show() {
    console.log(this.reversedWord = this.inputWord.split("").reverse().join(""));
  }
}
