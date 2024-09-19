import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  word: string = "";
  isPalindrome: boolean | null = null;

  show() {
    const reversedWord = this.word.split('').reverse().join('');
    this.isPalindrome = this.word === reversedWord;
  }
}
