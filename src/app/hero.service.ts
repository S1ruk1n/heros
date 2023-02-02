import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HELDEN } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService{
  [x: string]: any;
  getHelden(): Observable<Hero[]> {
    const helden = of(HELDEN);
    this.messageService.add('HeroService: fetched heros')
    return helden;
  }
  constructor(private messageService: MessageService) { }
}

