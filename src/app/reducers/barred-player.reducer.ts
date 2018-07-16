import { Action } from '@ngrx/store'
import { BarredPlayer } from '../model/barredPlayer'
import * as BarredPlayerActions from '../actions/barred-players.action'
import { BarredPlayerComponent } from '../component/barred-player/barred-player.component';
 
// Section 1
// const initialState: BarredPlayer =
// {
//     // name: 'Initial Tutorial',
//     // url: 'http://baidu.com'
//     id: 0,
//     BarredID:'',
//     // BarredAt: '',
//     // BarredEndTime: '',
//     // BarredBy: '',
//     // BarredStartTime: '',
//     // Birthday:'',
//     // FamilyName: '',
//     // GivenName: '',

//     // WynnId:'',
//     // Photo:'',
//     // Gender:'',
//     // CountryOfNational:'',
//     // PrimaryID:'',
//     // Reason:'',
//     // Comments:'',
//     // ModifiedOn:''
// }
 
// Section 2
export function reducer(state: BarredPlayer[], action: BarredPlayerActions.Actions) {
 
    debugger;
    // Section 3
    switch(action.type) {
        case BarredPlayerActions.ADD_BARREDPLAYER:
            return [...state, action.payload];
        case BarredPlayerActions.EDIT_BARREDPLAYER:
            //const a = state.find(x => x.id == action.payload.id);
            return [...state, action.payload];
        case BarredPlayerActions.REMOVE_BARREDPLAYER:
            state.splice(action.payload, 1)
            return state;
        case BarredPlayerActions.LOAD_BARREDPLAYER_SUCCESSFUL:
            state = [...action.payload];
            return state;
        default:
            return state;
    }
}
