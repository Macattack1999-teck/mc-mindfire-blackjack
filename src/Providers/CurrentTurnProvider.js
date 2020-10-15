import React, { useState } from 'react'
import CurrentTurnContext from '../Contexts/CurrentTurnContext'

export default (props) => {
  const [ currentTurn, setCurrentTurn ] = useState(null)

  const state = {
    currentTurn,
    setCurrentTurn
  }

  return (
    <CurrentTurnContext.Provider value={state}>
      {props.children}
    </CurrentTurnContext.Provider>
  )
}