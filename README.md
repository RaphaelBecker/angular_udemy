# angular_udemy
This tracks the udemy course: "Angular - The Complete Guide (2022 Edition)" 

## Install Angular framework:
1. Install Node JS: (Do NOT USE V17 as it is not working with Angular)
	https://nodejs.org/en/
	
2. Install ANGULAR CLI.
	https://github.com/angular/angular-cli
	https://angular.io/cli

## Setup a Angular project:
`ng new my-first-project --no-strict` \
`cd my-first-project` \
`ng serve` 
	
Setup Bootstrap CSS locally in root for basic styling: \
(did not work) \
* `npm install --save bootstrap@3` 
* add installed styles package in 'angular.json' in project root.
Add "node_modules/bootstrap/dist/css/bootstrap.min.css" under "styles": section.
* Rerun project with `ng serve`

Alternative but not recommended: 
`ng add @ng-bootstrap/ng-bootstrap` 

## Start the Angular project 
1. Navigate into root directory with your terminal
2. start dev server `ng serve`

## create new component in cli:
* `ng generate component comp_name`
or (short cut) `ng g c comp_name`
* Add argument to avoid generating pec file: `--skip-tests` 

## Workflow shortcuts:
* Comment HTML lines: `ctrl + k + c` \
* UNComment HTML lines: `ctrl + k + u` \
* Format Type Script: `Shift + Alt + F`

## Knowledge
Lists of all properties and events of the element: Googling for `YOUR_ELEMENT properties`  or `YOUR_ELEMENT events` should yield nice results.

## Angular important concepts:
* In HTML code, everything in between " " is Typescript code

### Basics:

#### Typescript

##### attribute definition:
* private: `element: {type: string, name: string content: string};`
* public passing down:   `@Input() element: {type: string, name: string, content: string};`
* public through someAlias:   `@Input('someAlias') ...;`
* public passing up:   ` @Output() elementCreated = new EventEmitter<{elementName: string, elementContent: string}>();`
* public through someAlias:   ` @Output(someAlias) ...;`


##### Java Script Objects in Type Script
Everything between curly brackets is java script syntax in type script

#### String Inerpolation 
Iside double {} brackets, a property can be placed from the .ts file
* `<h4 class="list-group-item-text">{{ recipe.description }}</h4>`

#### Property Binding 
* In html, any variables in squared brackets [] are binded

#### Event Binding

#### Two-way Binding [(ngModel)]
* Text input is assigend to attribute "newServerName" and string in "newServername" is also displayed in text box:
```
<input type="text" class="form-control" [(ngModel)]="newServerName">
```

* Binding to custom event:

```	
    <app-server-element 
	*ngFor="let serverElement of serverElements"
	[srvElement]="serverElement"
	></app-server-element>
```

* Listen from HTML to event:
```
    <app-cockpit 
    (serverCreated)="onServerAdded($event)"
    ></app-cockpit>
```
#### Local references in HTML
In component.html it is possible to use a whole element (input, button etc) instead of two way binding with help of a hash tag #:
<input type="text" class="form-control" #serverNameInput>
This element can be reused in the whole html file, for example to pass on a button as (click) event to the backend. Attributes are accessed like: `serverNameInput.value`
```<button
	class="btn btn-primary"
	(click)="onAddServer(serverNameInput)">Add Server
    </button>
```

#### Direct access to DOM through  @viewChild
Fetch local references via @viewChild():
HTML:
```
<input type="text" class="form-control" #serverContentInput>
```
TS-file:
```
@ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
```

#### ng-content
Passing conplex HTML code into another component from outside. Usefule when passing around reusable code.
Replace the code in the HTML component with:
`<ng-content></ng-content>`
and place the code into the directive of the component HTML file where it should be passed.  
ng-content tells angular, that it should execute the code between the opening and closig tag where the complex code is passed to. 

#### Directives

#### ng Model

#### ngif
* Structural directive, changes the structure of our DOM based o a condition. 
* Example: This will only be displayed in the browser if "display" = true 
```
{
	<p *ngIf="display"> 
		Secret password = tuna 
	</p>
}
```

#### ngStyle
* Attribute directive, dont change the structure of the DOM, it only changes the element they where placed on.
```
{
	<p [ngStyle]="{backgroundColor: 'green'}> 
		this background paragraph is green 
	</p>
}
```

#### ngFor
* Makes a list of Components where directive *ngFor is placed. logs is a array of numbers, for each array it will display a new div element styled based on i >= 5. i is directly assigned by let in ngFor statement. \
* Example: 
```
{
	<div 
		*ngFor="let log of logs; let i = index"
		[ngStyle]="{backgroundColor: i >= 5 ? 'blue' : 'transparent'}" 
		[ngClass]="{'white-text': i >= 5}"> 
		
		{{log}}
	</div>
}
```

### Property and Event Binding, comunication between components
* Html Elements: Native Properties & Events
* Directives: Custom Properties & Events
* Components: Custom Properies & Events

There are two ways of passing data between components (binding).
1. Bind child components to parent components, use: `@Input()` in child component
2. Bind parents to child components, use: `@Output()` in parent component

### View encapsulation:
If `encapsulation: ViewEncapsulation.None` is added to `@Component`, styles will be attached to all childs of that components as well. Per default, styles are not shared outsinde a component.


### Life cycle hooks
ngOnChange (only hook with parameters of type SimpleChanges)is fired when any change occures in a component. with console.log, the change object can be displayed:
```
  ngOnChanges(changes: SimpleChanges): void  {
    console.log('ngOnChanges called!')
    console.log(changes)
  }
```

Is executed when angular runs checks. FUnction is expensive. 
```
  ngDoCheck(): void {
    console.log('DoCheck called!')
  }
```

Only called once after content creation
```
  ngAfterContentInit(): void {
    console.log('AfterContentInit called!')
  }
```

```
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called!')
  }
```

```
  ngAfterViewInit(): void {
    console.log('AfterViewInit called!')
  }
```

```
  ngAfterViewChecked(): void {
    console.log('AfterViewInit called!')
  }
```

```
  ngOnDestroy(): void {
    console.log('OnDestroy called!')
  }
```


## Course project

### Planning the project: 
![Planning the app project](planning_the_App.png)
