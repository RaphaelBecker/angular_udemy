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
  logs: number[] = [];
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }

  onDisplay() {
    this.display = !this.display;
    this.logs.push(this.logs.length + 1);
  }
}
