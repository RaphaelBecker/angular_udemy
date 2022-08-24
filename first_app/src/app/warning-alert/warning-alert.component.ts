import { Component, OnInit } from "@angular/core";

@Component ({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`p { 
        padding: 20px;
        background-color: pink;
        border: 1px;
        color: red; }`]
})
export class WarningAlertComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }