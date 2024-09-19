import { Component } from '@angular/core';

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrl: './animelist.component.css'
})
export class AnimelistComponent {
  animies: string[] = [];
  currentAnime: string = "";

  show() {
    if (this.currentAnime.trim()) {
      this.animies.push(this.currentAnime.trim());
      this.currentAnime = "";
    }
  }

  removeAnime(index: number) {
    this.animies.splice(index, 1);
  }
}
