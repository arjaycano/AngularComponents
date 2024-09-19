import { Component } from '@angular/core';

@Component({
  selector: 'app-lowercaseconverter',
  templateUrl: './lowercaseconverter.component.html',
  styleUrl: './lowercaseconverter.component.css'
})
export class LowercaseconverterComponent {
  inputText: string = "";
  convertedText: string = "";

  show() {
    this.convertedText = this.inputText.toLowerCase();
  }
}
