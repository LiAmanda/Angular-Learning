import { Action } from '@ngrx/store'
import { BarredPlayer } from '../model/barredPlayer'
import * as BarredPlayerActions from '../actions/barred-players.action'
 
// Section 1
const initialState: BarredPlayer = new BarredPlayer();
//{
//     // name: 'Initial Tutorial',
//     // url: 'http://baidu.com'
//     id: 10,
//     BarredAt: ,
//     BarredEndTime: ,
//     BarredBy: ,
//     BarredStartTime: ,
//     Birthday:
//     FamilyName: 'Family Name',
//     GivenName: 'Given Name',
// }
 
// Section 2
export function reducer(state: BarredPlayer[] = [initialState], action: BarredPlayerActions.Actions) {
 
    // Section 3
    switch(action.type) {
        case BarredPlayerActions.ADD_BARREDPLAYER:
            return [...state, action.payload];
        case BarredPlayerActions.EDIT_BARREDPLAYER:
            return [...state, action.payload];
        case BarredPlayerActions.REMOVE_BARREDPLAYER:
            return [...state, action.payload];
        case BarredPlayerActions.LOAD_BARREDPLAYER_SUCCESSFUL:
            {debugger;
            return [action.payload];}
        default:
            return state;
    }
}
