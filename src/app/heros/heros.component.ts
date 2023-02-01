import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'techstarter-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  //held = "Batman"
  held:Hero ={
    id: 1,
    name: 'Batman',
    superpower: 'schlau, stark, clever, viel Geld'
  }
}
