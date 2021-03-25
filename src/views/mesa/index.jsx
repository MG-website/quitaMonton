import React from 'react'
import { Mano } from '../mano'
import { Images } from '../../cartas/index'
export function Mesa() {
    let cartas = Images()
    let carta = cartas["2C"]
    return (
        <div>
            <img src={ carta} alt="asd" />
            <h1>Aca va a ir todo el juego</h1>
            <Mano></Mano>
        </div>
    )
}

