import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BarredPlayerComponent } from './component/barred-player/barred-player.component';
import { BarredPlayerDetailComponent } from './component/barred-player-detail/barred-player-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component'
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { EditBarredPlayerComponent } from './component/edit-barred-player/edit-barred-player.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { AddBarredPlayerComponent } from './component/add-barred-player/add-barred-player.component';
import { BarredPlayerHistoryComponent } from './component/barred-player-history/barred-player-history.component';
import { WebSocketComponent } from './component/web-socket/web-socket.component';
import { StoreModule} from '@ngrx/store'
import { reducer}  from '../app/reducers/barred-player.reducer'

@NgModule({
  declarations: [
    AppComponent,
    BarredPlayerComponent,
    BarredPlayerDetailComponent,
    MenuBarComponent,
    EditBarredPlayerComponent,
    ToolBarComponent,
    AddBarredPlayerComponent,
    BarredPlayerHistoryComponent,
    WebSocketComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({barredPlayer: reducer}),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
