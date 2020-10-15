import React, { useState } from 'react'
import EndGameContext from '../Contexts/EndGameContext'

export default (props) => {
  const [ wins, setWins ] = useState(0)
  const [ loses, setLoses ] = useState(0)
  const [ endGame, setEndGame ] = useState(false)

  const state = {
    wins,
    setWins,
    loses,
    setLoses,
    endGame,
    setEndGame
  }

  return (
    <EndGameContext.Provider value={state}>
      {props.children}
    </EndGameContext.Provider>
  )
}