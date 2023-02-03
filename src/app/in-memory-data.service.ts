import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const helden = [
      { id: 1, name: 'Superman'},
      { id: 2, name: 'Batmann' },
      { id: 3, name: 'Spiderman' },
      { id: 4, name: 'Green Lantern' },
      { id: 5, name: 'Dr. Drange' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Captian America' },
      { id: 8, name: 'Jessica Jones' },
      { id: 9, name: 'Danger Mouse' },
      { id: 10, name: 'Meine Mudda' }
    ];
    return {helden};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(helden: Hero[]): number {
    return helden.length > 0 ? Math.max(...helden.map(held => held.id)) + 1 : 11;
  }
}