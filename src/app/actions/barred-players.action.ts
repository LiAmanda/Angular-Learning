// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { BarredPlayer } from '../model/barredPlayer'
 
// Section 2
export const ADD_BARREDPLAYER       = '[BARREDPLAYER] Add'
export const REMOVE_BARREDPLAYER    = '[BARREDPLAYER] Remove'
export const EDIT_BARREDPLAYER    = '[BARREDPLAYER] Edit'
export const LOAD_BARREDPLAYER_SUCCESSFUL    = '[BARREDPLAYER] LoadSuccessful'
export const ADD_DEMO = 'ADD_DEMO'
 
// Section 3
export class AddBarredPlayer implements Action {
    readonly type = ADD_BARREDPLAYER
 
    constructor(public payload: BarredPlayer) {}
}
 
export class RemoveBarredPlayer implements Action {
    readonly type = REMOVE_BARREDPLAYER
 
    constructor(public payload: number) {}
}

export class EditBarredPlayer implements Action {
    readonly type = EDIT_BARREDPLAYER
 
    constructor(public payload: BarredPlayer) {}
}

export class LoadBarredPlayerSuccessful implements Action {
    readonly type = LOAD_BARREDPLAYER_SUCCESSFUL

    constructor(public payload: BarredPlayer[]) {}
}

export class AddDemo implements Action {
    readonly type = ADD_DEMO

    constructor(public payload: object) {}
}

// Section 4
export type Actions = 
AddBarredPlayer 
| RemoveBarredPlayer
| EditBarredPlayer
| LoadBarredPlayerSuccessful
| AddDemo
