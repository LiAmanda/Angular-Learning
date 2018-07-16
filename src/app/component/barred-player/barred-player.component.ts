import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {BarredPlayer} from '../../model/barredPlayer';
import {BarredPlayerService} from '../../service/barred-player.service';
import {of, Observable} from 'rxjs';
import {Store, select} from '@ngrx/store'
import {AppState} from '../../app.state'
import { LoadBarredPlayerSuccessful, AddBarredPlayer } from '../../actions/barred-players.action';
import { catchError, map, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-barred-player',
  templateUrl: './barred-player.component.html',
  styleUrls: ['./barred-player.component.css']
})
export class BarredPlayerComponent implements OnInit{
  
  players : Observable<BarredPlayer[]>;
  term : string;
  
  constructor(private store: Store<AppState>, private barredPlayerService: BarredPlayerService) { 
    this.players = store.select('barredPlayer');
    debugger;
  }
  
  ngOnInit() {
    this.term="";
    this.getPlayers();
  }

  getPlayers(): void {
    this.barredPlayerService.getPlayers().subscribe((values) => this.store.dispatch(new LoadBarredPlayerSuccessful(values as BarredPlayer[]) ));
  };

  private handleError<T> (operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  search(): void {
    if(this.term.trim()){
      debugger
      const newPlayers = this.store.select('barredPlayer').pipe(map(x => {
        if(x && x.length > 0) {
          x = x.filter(y => y.id == this.term.trim())
        }

        return x;
      }));
      
      newPlayers.subscribe(x => console.log(x))
      this.players = newPlayers;
    }
    else{
      this.players = this.store.select('barredPlayer');
    }
  }

  // reset(){
  //   this.getPlayers();
  //   this.term = "";
  // }
  // delete(player: BarredPlayer): void {
  //   this.players = this.players.filter(h => h !== player);
  //   this.barredPlayerService.deletePlayer(player).subscribe();
  // }
}
