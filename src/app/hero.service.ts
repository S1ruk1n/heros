import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HELDEN } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class HeroService{
  constructor(private messageService: MessageService) { }

  getHelden(): Observable<Hero[]> {
    const helden = of(HELDEN);
    this.messageService.add('HeroService: fetched heros')
    return helden;
  }

  getHeld(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const held = HELDEN.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(held);
  }
  
}

