import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  settingSubMenuShow : boolean;
  barredSubMenuShow : boolean;
  flaggedSubMenuShow : boolean;

  ngOnInit() {
    this.settingSubMenuShow = false;
    this.barredSubMenuShow = false;
    this.flaggedSubMenuShow = false;
  }

  subMenuShow(node: string) {
    if(node == "barredNode"){
      this.barredSubMenuShow = !this.barredSubMenuShow;
    }
    if(node == "flaggedNode"){
      this.flaggedSubMenuShow = !this.flaggedSubMenuShow;
    }
    if(node == "settingNode"){
      this.settingSubMenuShow = !this.settingSubMenuShow;
    }
  }
}
