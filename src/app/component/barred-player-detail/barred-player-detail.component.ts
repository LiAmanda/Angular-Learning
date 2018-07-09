import { Component, OnInit, Input } from '@angular/core';
import {BarredPlayer} from '../../model/barredPlayer'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BarredPlayerComponent} from '../barred-player/barred-player.component'

import { BarredPlayerService }  from '../../service/barred-player.service';

@Component({
  selector: 'app-barred-player-detail',
  templateUrl: './barred-player-detail.component.html',
  styleUrls: ['./barred-player-detail.component.css']
})

export class BarredPlayerDetailComponent implements OnInit {

  @Input() player : BarredPlayer;

  constructor(
    private route: ActivatedRoute,
    private barredPlayerService: BarredPlayerService,
    private location: Location) { }

  ngOnInit():void {
    this.getPlayer();
  }
  
  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barredPlayerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }
  
  save(): void {
    this.barredPlayerService.updatePlayer(this.player)
    .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

  delete(player: BarredPlayer): void {
    this.barredPlayerService.deletePlayer(player).subscribe(player => this.goBack());
  }
}
