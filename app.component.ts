import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = "This is an one-way data binding example";
  
  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 50;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

//property binding

clientName:string ="Carl";  

//style binding
appliedCSSClass= "green";
notappliedCSSClass=false;
myColor="violet";

//two-way data binding
showData($event:any){
  console.log("Button is Clicked!");

}
//keyup function
getData(data:any){
  console.warn(data)
}

}
