import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
  OnInit,   
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String; 

  constructor() { 
    console.log('constructor called!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log('DoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called!')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called!')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit called!')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewInit called!')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called!')
  }

}
