import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { crearMazo } from '../../actions'

export function Juego() {
    const history= useHistory()
    const dispatch = useDispatch()
    
    const HandleInit = () =>{
        dispatch(crearMazo())
        history.push('/juego/mesa')
    }
    return (
        <div>
            <h1>Aca va a ir la configuracion de juego</h1>
            <button onClick={HandleInit}>Listo</button>
        </div>
    )
}

