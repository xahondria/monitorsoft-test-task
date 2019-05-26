import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private apiUrl = 'https://reqres.in/api'; // URL to web api
  private isLoggedIn: boolean;
  private token: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  signIn(user: User): Observable<User> {
    const url = `${ this.apiUrl }/login`;
    return this.http.post<any>(url, user, httpOptions)
      .pipe(
        tap(_ => {
          this.token = _.token;
          this.isLoggedIn = true;
          this.log(`logged in as ${ user.email }`);
        }),
        catchError(this.handleError('signIn'))
      );
  }

  private log(message: string) {
    this.messageService.add(`AuthorizationService: ${ message }`);
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
