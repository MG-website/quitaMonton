import React from 'react'
import { Mano } from '../mano'
import { useDispatch, useSelector } from 'react-redux'
import { quitarDeMesa, repartirInicial, repartirNormal, tirarCarta } from '../../actions'
import { mazoSelector } from '../../utils/selectors'
export function Mesa() {

   const dispatch = useDispatch()
    const mazo = useSelector( mazoSelector)
    return (
        <div>
            <h1>Aca va a ir todo el juego</h1>
            <Mano></Mano>
            <button onClick={()=> dispatch(repartirInicial(mazo))}> repartirInicial</button>
            <button onClick={ () => dispatch(tirarCarta('2D','jugador1'))}> Tirar a la mesa</button>
            <button onClick={ () => dispatch(quitarDeMesa('2H','jugador1'))}> quitar a la mesa</button>

        </div>
    )
}

