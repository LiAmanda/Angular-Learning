import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {BarredPlayer} from '../../model/barredPlayer';
import {BarredPlayerService} from '../../service/barred-player.service';

@Component({
  selector: 'app-barred-player',
  templateUrl: './barred-player.component.html',
  styleUrls: ['./barred-player.component.css']
})
export class BarredPlayerComponent implements OnInit, OnDestroy{
  
  ngOnDestroy(): void {
    console.log("Method not implemented.");
  }
  
  players : BarredPlayer[];
  term: string;
  
  constructor(private barredPlayerService: BarredPlayerService) {

  }

  ngOnInit() {
    this.term="";
    this.getPlayers();
  }

  getPlayers(): void {
    this.barredPlayerService.getPlayers().subscribe(barredPlayers => this.players = barredPlayers);
  }

  search(): void {
    debugger;
    if(this.term.trim()){
      this.barredPlayerService.searchPlayers(this.term).subscribe(barredPlayers => this.players = barredPlayers);
    }
    else{
      this.getPlayers();
    }
  }

  reset(){
    this.getPlayers();
    this.term = "";
  }
  delete(player: BarredPlayer): void {
    this.players = this.players.filter(h => h !== player);
    this.barredPlayerService.deletePlayer(player).subscribe();
  }



}
