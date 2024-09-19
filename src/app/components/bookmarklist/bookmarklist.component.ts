import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  url: string = "";
  urlList: string[] = [];

  show() {
    if (this.url) {
      this.urlList.push(this.url);
      this.url = "";
    }
  }
}
