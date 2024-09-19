import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = "";
  wordCount: number = 0;

  show() {
    if (this.inputText.trim() === '') {
      this.wordCount = 0;
    } else {
      this.wordCount = this.inputText.trim().split(/\s+/).length;
    }
  }
}
