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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHeld({ name } as Hero)
      .subscribe(held => {
        this.helden.push(held);
      });
  }
 
  delete(held: Hero): void {
    this.helden = this.helden.filter(h => h !== held);
    this.heroService.deleteHeld(held.id).subscribe();
  }

  //Hier die OnSelect Methode
 // onSelect(held: Hero): void {
   // this.selectedHeld = held;
    //this.messageService.add(`HerosComponent: Selected held id=${held.id}`)
}


