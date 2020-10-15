import React, { useState, useEffect } from 'react'
// import Image from '../Images/blackjack-cards/'
import Cards from '../Utilities/Cards'

export default () => {
  const [ cards, setCards ] = useState(Cards)
  const [ shuffledCards, setShuffledCards ] = useState([])
  const [ playerCards, setPlayerCards ] = useState([]);
  const [ dealerCards, setDealerCards ] = useState([]);

  useEffect(() => {
    setShuffledCards(cards.sort(() => .5 - Math.random()))
  }, [])

  useEffect(() => {
    if (shuffledCards.length > 0) {
      setDealerCards([shuffledCards[0], shuffledCards[1]])
      setPlayerCards([shuffledCards[2], shuffledCards[3]])
    }
  }, [shuffledCards])

  // console.log(dealerCards)
  // console.log(playerCards)
  return (
    <div style={{ backgroundColor: "#1D2020", height: "80%" }}>
      <div style={{ backgroundColor: "#744A35", height: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderBottom: "30px solid #744A35" }}>
        <div style={{ backgroundColor: "#008000", height: "90%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}>
          <div>
            {
              dealerCards.length > 0 ? (
                dealerCards.map((card) => {
                  return (
                    <div>
                      <img
                        style={{ width: "75px", height: "100px" }}
                        src={require("../Images/blackjackCards/".concat(card.image))}
                      />
                    </div>
                  )
                })
              ) : "Loading..."
            }
          </div>

          <div>Player half</div>
        </div>
      </div>
    </div>
  )
}