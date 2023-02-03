import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HELDEN } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class HeroService{

  private heldenUrl = 'api/heroes';  // URL to web api

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(
  private http: HttpClient,
  private messageService: MessageService) { }


      /** Log a HeroService message with the MessageService 
       * private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}*/

getHelden(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heldenUrl)
    .pipe(
      tap(_ => this.log('fetched helden')),
      catchError(this.handleError<Hero[]>('getHelden', []))
    );
}


 /** GET hero by id. Return `undefined` when id not found */
 getHeldNo404<Data>(id: number): Observable<Hero> {
  const url = `${this.heldenUrl}/?id=${id}`;
  return this.http.get<Hero[]>(url)
    .pipe(
      map(helden => helden[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} held id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHeld id=${id}`))
    );
}

/** GET hero by id. Will 404 if id not found */
getHeld(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  //const held = HELDEN.find(h => h.id === id)!;
  //this.messageService.add(`HeroService: fetched hero id=${id}`);
  
  const url = `${this.heldenUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched held id=${id}`)),
    catchError(this.handleError<Hero>(`getHeld id=${id}`))
    );
  }

/* GET heroes whose name contains search term */
searchHelden(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heldenUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found helden matching "${term}"`) :
       this.log(`no helden matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHelden', []))
  );
}

/// Speichern ///

/** POST: add a new hero to the server */
addHeld(held: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heldenUrl, held, this.httpOptions).pipe(
    tap((newHeld: Hero) => this.log(`added held w/ id=${newHeld.id}`)),
    catchError(this.handleError<Hero>('addHeld'))
  );
}

/** DELETE: delete the hero from the server */
deleteHeld(id: number): Observable<Hero> {
  const url = `${this.heldenUrl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted held id=${id}`)),
    catchError(this.handleError<Hero>('deleteHeld'))
  );
}


  /** PUT: update the hero on the server */
  updateHeld(held: Hero): Observable<any> {
    return this.http.put(this.heldenUrl, held, this.httpOptions).pipe(
      tap(_ => this.log(`updated held id=${held.id}`)),
      catchError(this.handleError<any>('updateHeld'))
    );
  }




/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}