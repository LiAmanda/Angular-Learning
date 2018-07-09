import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {BarredPlayerService} from '../../service/barred-player.service';
import {BarredPlayer} from '../../model/barredPlayer';


@Component({
  selector: 'app-add-barred-player',
  templateUrl: './add-barred-player.component.html',
  styleUrls: ['./add-barred-player.component.scss']
})
export class AddBarredPlayerComponent implements OnInit {

  constructor(
    private barredPlayerService: BarredPlayerService,
    private location: Location
    ) { }

  ngOnInit() {
    this.player = new BarredPlayer();
  }

  player: BarredPlayer;

  add():void{
    if(!this.player){return;}
    this.barredPlayerService.addBarredPlayer(this.player)
    .subscribe(player => this.goBack())
  }

  goBack(): void{
    this.location.back();
  }

}
