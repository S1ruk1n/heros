import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'techstarter-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  //selectedHeld?: Hero;
  //held:Hero ={id: 1,name: 'Batman',superpower: 'schlau, stark, clever, viel Geld'}
  helden : Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHelden();
  }

  getHelden(): void {
    this.heroService.getHelden()
    .subscribe(helden => this.helden = helden);
  }

 


  //Hier die OnSelect Methode
 // onSelect(held: Hero): void {
   // this.selectedHeld = held;
    //this.messageService.add(`HerosComponent: Selected held id=${held.id}`)
}


