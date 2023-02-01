import { Component } from '@angular/core';

@Component({
  selector: 'techstarter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heros !!';
  name = "Sarukan";
  summe = function():number{return 3+4}
  getSomeText = getName("Hier ist irgend ein Text")
 }
 function getName(myname:string):string{return myname}

