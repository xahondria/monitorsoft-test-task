import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly TOKEN = 'TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private apiUrl = 'https://reqres.in/api'; // URL to web api
  private loggedUser: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  register(user: User): Observable<boolean> {
    const url = `${ this.apiUrl }/register`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(tokens => {
          this.doLoginUser(user.email, tokens);
          this.log(`registered as ${ user.email }`);
        }),
        mapTo(true),
        catchError(this.handleError('register', false))
      );
  }

  login(user: User): Observable<boolean> {
    const url = `${ this.apiUrl }/login`;
    return this.http.post<any>(url, user)
      .pipe(
        tap(tokens => {
          this.doLoginUser(user.email, tokens);
          this.log(`logged in as ${ user.email }`);
        }),
        mapTo(true),
        catchError(this.handleError('login', false))
      );
  }

  logout(): Observable<boolean> {
    const url = `${ this.apiUrl }/logout`;
    return this.http.post<any>(url, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => {
        this.doLogoutUser();
        this.log(`User logged out`);
      }),
      mapTo(true),
      catchError(this.handleError('logout', false))
    );
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  refreshToken() {
    const url = `${ this.apiUrl }/refresh`;
    return this.http.post<any>(url, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((token) => {
        this.storeToken(token);
    }));
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  private doLoginUser(email: string, token) {
    this.loggedUser = email;
    this.storeToken(token);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeToken();
  }

  private getRefreshToken() {}

  private storeToken(token) {
    localStorage.setItem(this.TOKEN, token.token);
    localStorage.setItem(this.REFRESH_TOKEN, token.refreshToken);
  }

  private removeToken() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
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
