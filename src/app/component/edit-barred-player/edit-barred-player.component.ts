import { Component, OnInit, Input } from '@angular/core';
import { BarredPlayer } from '../../model/barredPlayer'
import { BarredPlayerService }  from '../../service/barred-player.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MDBBootstrapModule} from 'angular-bootstrap-md'

@Component({
  selector: 'app-edit-barred-player',
  templateUrl: './edit-barred-player.component.html',
  styleUrls: ['./edit-barred-player.component.scss']
})
export class EditBarredPlayerComponent implements OnInit {

  @Input() player : BarredPlayer;

  constructor(
    private route: ActivatedRoute,
    private barredPlayerService: BarredPlayerService,
    private location: Location) { }

  ngOnInit() {
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
}
