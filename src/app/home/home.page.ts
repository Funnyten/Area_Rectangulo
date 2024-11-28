
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  base: number = 0;
  height: number = 0;
  area: number | null = null;

  calculateArea() {
    if (this.base > 0 && this.height > 0) {
      this.area = this.base * this.height;
    } else {
      this.area = null;
      alert('Please enter valid positive numbers for base and height.');
    }
  }
}
    