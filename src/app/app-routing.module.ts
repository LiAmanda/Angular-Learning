import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {BarredPlayerComponent} from './component/barred-player/barred-player.component'
import {BarredPlayerDetailComponent} from './component/barred-player-detail/barred-player-detail.component'
import {EditBarredPlayerComponent} from './component/edit-barred-player/edit-barred-player.component'
import {AddBarredPlayerComponent} from './component/add-barred-player/add-barred-player.component'
import {BarredPlayerHistoryComponent} from './component/barred-player-history/barred-player-history.component'

const routes: Routes=[
  {path: '', redirectTo: '/players', pathMatch: 'full' },
  {path: 'players', component: BarredPlayerComponent},
  {path: 'detail/:id', component: BarredPlayerDetailComponent},
  {path: 'editPlayer/:id', component: EditBarredPlayerComponent},
  {path: 'addPlayer', component: AddBarredPlayerComponent},
  {path: 'barredHistory', component: BarredPlayerHistoryComponent}
];

@NgModule({
    exports: [ RouterModule],
    imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

 }

