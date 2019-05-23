import { Injectable } from '@angular/core';
import { Workman } from './workman';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkmanService {

  private apiUrl = 'https://reqres.in/api/users'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  addWorkman(workman: Workman): Observable<Workman> {
    return this.http.post<Workman>(this.apiUrl, workman, httpOptions)
      .pipe(
        tap((newWorkman: Workman) => this.log(`added workman id=${newWorkman.id}, name ${newWorkman.name}, job ${newWorkman.job}`)),
        catchError(this.handleError<Workman>('addWorkman'))
      );
  }

  private log(message: string) {
    this.messageService.add(`WorkmanService: ${ message }`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${ operation } failed: ${ error.message }`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
