import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "May the Force be with you. - Star Wars (many characters)",
    "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
    "Not all those who wander are lost. - J. R. R. Tolkein"
  ];
  currentQuote: string = "";

  show() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }
}
