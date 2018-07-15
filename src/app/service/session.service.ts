import { Injectable } from '@angular/core';
import { AES, enc} from 'crypto-js';
import {has, isNull} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  private json: Object = {};
  private tobeLocalSavedJson: Object = {};
  private tobeSessionSavedJson: Object = {};
  private timeoutId: any;

  public get(key:string):any{
    console.debug('begin get(), key is %s', key);
    if(has(this.json, key)){

    }
  }
}
