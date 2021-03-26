import { act } from 'react-dom/test-utils';
import { valorCarta } from '../utils';
import { ACTIONS } from '../utils/helpers';

const initialState = {
mazo : [],
mesa:[],
jugador1: {
    monto:[],
    mano:[]
},
jugador2: {
    monto:[],
    mano:[]
}
}
export function rootReducer( state  = initialState, action) {

    switch (action.type) {
        case ACTIONS.crearMazo: 
            return { 
                ...state, mazo: action.payload
            };

        case ACTIONS.MezclarMazo: 
            break;
            case ACTIONS.repartirInicial: 
            return {
                    ...state, 
                    mazo : state.mazo.filter(e => e !== action.payload[e]),
                    mesa : Object.values(action.payload).slice(6),
                    jugador1: { ...state.jugador1, mano:Object.values(action.payload).slice(0,3)},
                    jugador2: {...state.jugador2, mano:Object.values(action.payload).slice(3,6)},
                   
            }
            case ACTIONS.repartirNormal: 
            return {
                    ...state, 
                    mazo : state.mazo.filter(e => e !== action.payload[e]),
                    jugador1: { ...state.jugador1, mano:Object.values(action.payload).slice(0,3)},
                    jugador2: {...state.jugador2, mano:Object.values(action.payload).slice(3)},
                   
            }
            case ACTIONS.repartirUltimas: 

            return{
                ...state,
                    mesa : state.mesa.push( Object.values(action.payload)[0]),
                    mazo : state.mazo.filter(e => e !== action.payload[e]),
                    jugador1: { ...state.jugador1, mano:Object.values(action.payload).slice(0,2)},
                    jugador2: {...state.jugador2, mano:Object.values(action.payload).slice(2)},

            }
            case ACTIONS.quitarDeMesa: 
            return {
                ...state,
                mesa : state.mesa.filter( e => valorCarta(e) !== valorCarta(action.payload.carta)),
                [action.payload.jugador] : {  
                    ...state[action.payload.jugador], 
                    mano : state[action.payload.jugador].mano.filter(e => e !== action.payload.carta),
                    monto : state[action.payload.jugador].monto.concat(state.mesa.filter(e => valorCarta(e) == valorCarta( action.payload.carta)).concat(action.payload.carta))
                }
            }
            case ACTIONS.quitarMazo: 
            if(action.payload.jugador === 'jugador1'){
                return {
                    ...state,
                    jugador1: { ...state.jugador1,                  
                        mano : state.jugador1.mano.filter(e => e !== action.payload.carta),
                        monto : state.jugador1.monto.concat(state.jugador2.monto).concat(action.payload.carta),
                    },
                    jugador2: { ...state.jugador2,
                    monto: []
                    }
            }
            }else{

                return {
                    ...state,
                    jugador2: { ...state.jugador2,                  
                        mano : state.jugador2.mano.filter(e => e !== action.payload.carta),
                        monto : state.jugador2.monto.concat(state.jugador1.monto).concat(action.payload.carta),
                    },
                    jugador1: { ...state.jugador1,
                    monto: []
                    }
            }
            }
        
            case ACTIONS.tirarCarta: 
            return{
                ...state,
                [action.payload.jugador]: { ...state[action.payload.jugador], 
                mano: state[action.payload.jugador].mano.filter(e => e !== action.payload.carta) },
                mesa: state.mesa.concat(action.payload.carta)
            }
        default:
            return state
            
    }
}


