import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Page } from './page';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersPageUrl = 'https://reqres.in/api/users?delay=3'; // URL to web api with delayed response
  // private usersPageUrl = 'https://reqres.in/api/users'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getUsersPage(page: number = 1, elementsPerPage: number = 3): Observable<Page> {
    const emptyPage: Page = new Page();
    return this.http.get<Page>(this.usersPageUrl, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('per_page', elementsPerPage.toString())
    }).pipe(
      tap(_ => this.log(`fetched users page #${ _.page } of ${ _.total_pages }`)),
      catchError(this.handleError<Page>('getUsersPage', emptyPage as Page))
    );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${ message }`);
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
