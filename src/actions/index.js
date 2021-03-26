import { ACTIONS } from "../utils/helpers";

export const crearMazo= ()=>{
const tipos      = ['C','D','H','S'],
    especiales = ['A','J','Q','K'];


  let  mazo = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            mazo.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            mazo.push( esp + tipo);
        }
    }

    return {
        type: ACTIONS.crearMazo, payload : mazo
    }
}

export const repartirNormal = (mazo) =>{
    let mano = {};
    for (let i = 0; i < 6; i++) {
        mano[mazo[i]]= mazo[i];
    }
    return {
        type: ACTIONS.repartirNormal, payload: mano
    }
}

export const repartirUltimas = (mazo) =>{
    let mano = {};
    for (let i = 0; i < mazo.length; i++) {
        mano[mazo[i]] = mazo[i]        
    }
    return {
        type: ACTIONS.repartirUltimas, payload : mano
    }
}

export const repartirInicial = (mazo)=>{
    let mano = {};
    for (let i = 0; i < 10; i++) {
        mano[mazo[i]]= mazo[i];
    }
    console.log(mano)
    return {
        type: ACTIONS.repartirInicial, payload: mano
    }

}

export const quitarDeMesa = (carta, jugador) => {

    return {
        type: ACTIONS.quitarDeMesa, payload : { jugador : jugador, carta : carta}
    }
}

export const quitarMazo = (carta,jugador) =>{


    return {
        type: ACTIONS.quitarMazo, payload: { jugador: jugador, carta: carta}
    }
}

export const tirarCarta = (carta, jugador)=>{
return {
    type: ACTIONS.tirarCarta, payload: {carta: carta, jugador : jugador}
}
}