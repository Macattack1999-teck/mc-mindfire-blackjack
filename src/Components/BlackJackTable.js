import React, { useState, useEffect } from 'react'
// import Image from '../Images/blackjack-cards/'
import Cards from '../Utilities/Cards'

export default () => {
  const [ cards, setCards ] = useState(Cards)
  const [ shuffledCards, setShuffledCards ] = useState([])
  const [ playerCards, setPlayerCards ] = useState([]);
  const [ dealerCards, setDealerCards ] = useState([]);
  const [ dealerSecondCardShown, setDealerSecondCardShown ] = useState(false)

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
          <div style={{ height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {
              dealerCards.length > 0 ? (
                dealerCards.map((card, idx) => {
                  return (
                    <div
                      style={{ width: "75px", height: "100px", position: "relative", margin: "0 10px" }}
                    >
                      <div style={{ width: "100%", height: "100%", backgroundColor: "#933d41", borderRadius: "10px", fontSize: "14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "absolute" }}>
                        <div>
                          Mindfire
                        </div>

                        <div>
                          Blackjack
                        </div>
                      </div>

                      {
                        idx === 1 && !dealerSecondCardShown ? (
                          <div style={{ position: "absolute", zIndex: "-1" }}>
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={require("../Images/blackjackCards/".concat(card.image))}
                            />
                          </div>
                        ) : (
                          <div style={{ position: "absolute" }}>
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={require("../Images/blackjackCards/".concat(card.image))}
                            />
                          </div>
                        )
                      }

                      
                    </div>
                  )
                })
              ) : "Shuffling..."
            }
          </div>

          <div>Player half</div>
        </div>
      </div>
    </div>
  )
}