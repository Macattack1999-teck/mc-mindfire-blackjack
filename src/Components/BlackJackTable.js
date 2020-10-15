import React, { useState, useEffect } from 'react'
import Cards from '../Utilities/Cards'

export default () => {
  const [ cards, setCards ] = useState(Cards)
  const [ shuffledCards, setShuffledCards ] = useState()
  const [ playerCards, setPlayerCards ] = useState();
  const [ dealerCards, setDealerCards ] = useState();
  
  useEffect(() => {
    setShuffledCards(cards.sort(() => .5 - Math.random()))
  }, [])

  console.log(shuffledCards)
  return (
    <div style={{ backgroundColor: "#744A35", height: "80%" }}>
      <div style={{ backgroundColor: "#008000", height: "90%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}>
        <div>Dealer half</div>
        <div>Player half</div>
      </div>
    </div>
  )
}