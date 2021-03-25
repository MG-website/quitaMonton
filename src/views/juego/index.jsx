import React from 'react'
import { useHistory } from 'react-router'

export function Juego() {
    const history= useHistory()
    return (
        <div>
            <h1>Aca va a ir la configuracion de juego</h1>
            <button onClick={()=> history.push('/juego/mesa')}>Listo</button>
        </div>
    )
}

