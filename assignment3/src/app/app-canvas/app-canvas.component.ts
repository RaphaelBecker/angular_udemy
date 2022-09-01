import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css'],
  styles: [`
  .custom_white_css_class {
    color: white;
    }`]
})
export class AppCanvasComponent implements OnInit {

  display = true;
  password = "tuna";
  n = 0;
  logs = [0]

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  onDisplay() {
    this.n = this.n + 1;
    this.logs.push(this.n);

    if (this.display == true) {
      this.display = false;
    }
    else {
      this.display = true;
    }
  }

  getColor() {
    if (this.logs.length > 5) {
      return 'green';
    }
    else {
      return 'white';
  }
}

  getWhite() {
    if (this.logs.length > 5) {
      return true;
    }
    else {
      return false;
    }
  }
}
