# angular_udemy
This tracks the udemy course: "Angular - The Complete Guide (2022 Edition)" 

## Install Angular framework:
1. Install Node JS: (Do NOT USE V17 as it is not working with Angular)
	https://nodejs.org/en/
	
2. Install ANGULAR CLI.
	https://github.com/angular/angular-cli
	https://angular.io/cli

## Setup a Angular project:
`ng new my-first-project` \
`cd my-first-project --no-strict` \
`ng serve` 
	
Setup Bootstrap CSS locally in root for basic styling: \
(did not work) \
`npm install --save bootstrap@3` \
this did work for me: \
`ng add @ng-bootstrap/ng-bootstrap` 

## Start the Angular project 
1. Navigate into root directory with your terminal
2. start dev server `ng serve`

## create new component in cli:
`ng generate component comp_name`
or (short cut) `ng g c comp_name`

## Workflow shortcuts:
* Comment HTML lines: `ctrl + k + c` \
* Format Type Script: `Shift + Alt + F`

## Knowledge
Lists of all properties and events of the element: Googling for `YOUR_ELEMENT properties`  or `YOUR_ELEMENT events` should yield nice results.

## Angular important concepts:
* In HTML code, everything in between " " is Typescript code

### Basics:

#### String Inerpolation 

#### Property Binding 
* In html, any variables in squared brackets [] are binded
#### Event Binding / Two-way Binding

#### Directives

#### ngif
* Structural directive, changes the structure of our DOM based o a condition. 
* Example: This will only be displayed in the browser if "display" = true \
`<p *ngIf="display"> Secret password = tuna </p>`
#### ngStyle
* Attribute directive, dont change the structure of the DOM, it only changes the element they where placed on. \
`<p [ngStyle]="{backgroundColor: 'green'}"> this background paragraph is green </p>`

#### ngFor


## first app
### preview:
