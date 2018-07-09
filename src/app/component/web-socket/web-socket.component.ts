import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../service/web-socket.service'

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  constructor(private wsService:WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
    .subscribe(
      data => console.log(data),
      err=> console.log(err),
      () => console.log("websock close")
    );
  }

  sendMessageToServer(){
    this.wsService.sendMessage("hello from client")
  }
}
