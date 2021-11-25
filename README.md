
## Angualr version - 13.0.2
## Project Architecture

## 1- Wrapper Module :- 

   It's consist of a sidebar in which the material nav sidebar is made and a wrapper component in which the theme sidebar, header and router outlet is wrapped to achieve the desired figma design.

## 2- Home-Dashboard Module :-
   
   This module consist of a restaurants list, detail & product page.

   In restaurant list page, all the restaurants cards are being fetched from a common card from shared module and embeded in for loop using *ngFor and data of particular card passed to the child in shared module using input.

   In reaturants detail page, the reaturants products is component is called to achieve the Figma Design restaurent product is seperate and can we called in other pages based on future requirenment.

## 3- Shared Module :-   

   This Module is made to keep all the common components which can we exported & imported throughout the project as per the requirenment.


## 4- Core Module :-  
   
   1- fonts.scss- In this file all the fonts family have been imported and this file is added in angular.json style to bes use        throughout the projects
   2- material.ts- It contain all the material modules
   3- responsive.scss - Responsive css and media query
   4- routes.ts - The route have been saved into a variable and exported which can be imported and use thourghout the project instead of static router.
   5- variables.scss - All the color used in the project have been declared in this file and can be use thorugout the project by this importing this file in the component and style.css.

## 5- Services :- 

   It's contain the common service file which contains a function to check if the project is loaded on web or mobile it returns true or false. We can also add other common functions in this file. The common service can be imported and saved in the variable to access the function in the component as per requirenment. I have used the common funtion to check mobile or not in wrpapper component.


# Pomoco

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).




