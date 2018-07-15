import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {BarredPlayer} from '../../model/barredPlayer';
import {BarredPlayerService} from '../../service/barred-player.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store'
import {AppState} from '../../app.state'
import { LoadBarredPlayerSuccessful } from '../../actions/barred-players.action';
import { async } from '../../../../node_modules/@types/q';
import { catchError, map, mergeMap, switchMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-barred-player',
  templateUrl: './barred-player.component.html',
  styleUrls: ['./barred-player.component.css']
})
export class BarredPlayerComponent implements OnInit, OnDestroy{
  
  ngOnDestroy(): void {
    console.log("Method not implemented.");
  }
  
  players : Observable<BarredPlayer[]>;
  // term: string;
  
  // constructor(private barredPlayerService: BarredPlayerService) {

  // }

  // Section 2
  constructor(private store: Store<AppState>, private barredPlayerService: BarredPlayerService) { 
    this.players = store.select('barredPlayers');
    console.log('this is constructor')
  }
  
  ngOnInit() {
    // this.term="";
    console.log('this is ngOnInit');
    this.getPlayers();
    
  }

  getPlayers(): void {
    this.barredPlayerService.getPlayers()
    .pipe(
      map((players: BarredPlayer[]) => new LoadBarredPlayerSuccessful(players))
    )
  };

  // search(): void {
  //   debugger;
  //   if(this.term.trim()){
  //     this.barredPlayerService.searchPlayers(this.term).subscribe(barredPlayers => this.players = barredPlayers);
  //   }
  //   else{
  //     this.getPlayers();
  //   }
  // }

  // reset(){
  //   this.getPlayers();
  //   this.term = "";
  // }
  // delete(player: BarredPlayer): void {
  //   this.players = this.players.filter(h => h !== player);
  //   this.barredPlayerService.deletePlayer(player).subscribe();
  // }



}
