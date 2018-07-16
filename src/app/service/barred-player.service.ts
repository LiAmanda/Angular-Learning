import { Injectable } from '@angular/core';
import {BarredPlayer} from '../model/barredPlayer';
import {of, Observable} from 'rxjs';
import {MessageService} from './message.service'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BarredPlayerService {

  constructor(
    private http: HttpClient,
    private messageService : MessageService) { }

    private barredPlayersUrl = 'api/players';
  
    players : Observable<BarredPlayer[]>;

  getPlayers(): Observable<BarredPlayer[]> {
    this.messageService.add('BarredPlayerService: fetch data');
    // const model = this.http.get<BarredPlayer[]>(this.barredPlayersUrl);
    // debugger;
    // return model;

    return this.http.get<BarredPlayer[]>(this.barredPlayersUrl).pipe(
      tap(players => this.log(`fetched players`)),
      catchError(this.handleError('getBarredPlayers', []))
    )
  }

  searchPlayers(term: string): Observable<BarredPlayer[]>{
    debugger;
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<BarredPlayer[]>(`api/players/?WynnId=${term}`).pipe(
      tap(_ => this.log(`found players matching "${term}"`)),
      catchError(this.handleError<BarredPlayer[]>('searchPlayers', []))
    );

  }

  getPlayer(id: number): Observable<BarredPlayer> {
    const url = `${this.barredPlayersUrl}/${id}`
    this.messageService.add(`BarredPlayerService: fetched player id=${id}`);
    return this.http.get<BarredPlayer>(url).pipe(
      tap(_ => this.log(`fetch player id = ${id}`)),
      catchError(this.handleError<BarredPlayer>(`getPlayer id=${id}`)),
      
    )
  }

  updatePlayer (player: BarredPlayer): Observable<any> {
    return this.http.put(this.barredPlayersUrl, player, httpOptions).pipe(
      tap(_ => this.log(`updated player id=${player.id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  addBarredPlayer(player : BarredPlayer): Observable<BarredPlayer>{
    return this.http.post<BarredPlayer>(this.barredPlayersUrl, player, httpOptions).pipe(
      tap((player : BarredPlayer) => this.log(`added player w/ id=${player.id}`)),
      catchError(this.handleError<BarredPlayer>('addPlayer'))
    );
  }

  deletePlayer (player: BarredPlayer | number): Observable<BarredPlayer> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.barredPlayersUrl}/${id}`;

    return this.http.delete<BarredPlayer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted player id=${id}`)),
      catchError(this.handleError<BarredPlayer>('deletePlayer'))
    );
  }
  private log (message: string) {
    this.messageService.add('BarredPlayerService:'+message)
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
