import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css']
})
export class AppCanvasComponent implements OnInit {

  display = true;
  password = "tuna";
  n = 0;
  narray: number[] = new Array()

  constructor() { 
    this.narray.push(this.n)
  }

  ngOnInit(): void {
  }

  onDisplay() {
    this.n = this.n + 1;
    this.narray.push(this.n)

    if (this.display == true) {
      this.display = false;
    }
    else {
      this.display = true
    }
  }

}
