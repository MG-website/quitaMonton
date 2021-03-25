import React from 'react'
import { useHistory } from 'react-router'

 export function Home() {
     const history = useHistory()
    return (
        <div>
            <h1> Juego de cartas</h1>
            <button onClick={ () => history.push('/juego')}> Jugar</button>
        </div>
    )
}

