import React, { useState } from 'react'
import PointCalculatorContext from '../Contexts/PointCalculatorContext'

export default (props) => {
  const [ dealerPoints, setDealerPoints ] = useState("Not calculated yet.")
  const [ playerPoints, setPlayerPoints ] = useState("Not calculated yet.")

  const state = {
    dealerPoints,
    setDealerPoints,
    playerPoints,
    setPlayerPoints
  }

  return (
    <PointCalculatorContext.Provider value={state}>
      {props.children}
    </PointCalculatorContext.Provider>
  )
}