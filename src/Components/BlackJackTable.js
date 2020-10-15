import React, { useState, useEffect, useContext } from "react";
import Cards from "../Utilities/Cards";
import PointCalculatorContext from "../Contexts/PointCalculatorContext";
import CardsContext from '../Contexts/CardsContext';
import CurrentTurnContext from "../Contexts/CurrentTurnContext";

export default () => {
  const [cards, setCards] = useState(Cards);
  const [dealerSecondCardShown, setDealerSecondCardShown] = useState(false);
  const {
    setDealerPoints,
    setPlayerPoints
  } = useContext(PointCalculatorContext)

  const {
    shuffledCards,
    setShuffledCards,
    dealerCards,
    setDealerCards,
    playerCards,
    setPlayerCards,
    setCardsUsed
  } = useContext(CardsContext)

  const {
    setCurrentTurn
  } = useContext(CurrentTurnContext)

  useEffect(() => {
    setShuffledCards(cards.sort(() => 0.5 - Math.random()));
  }, []);

  useEffect(() => {
    if (shuffledCards.length > 0) {
      setDealerCards([shuffledCards[0], shuffledCards[1]]);
      setPlayerCards([shuffledCards[2], shuffledCards[3]]);
      setCardsUsed(4)
      setCurrentTurn("player")
    }
  }, [shuffledCards]);

  useEffect(() => {
    if (dealerCards.length > 0 && playerCards.length > 0) {
      const dealerPoints = dealerCards.reduce((accum, currentVal, currentIndex) => {
        if (!dealerSecondCardShown && currentIndex === 1) {
          return accum += 0
        }

        return accum += currentVal.value
      }, 0)

      const playerPoints = playerCards.reduce((accum, currentVal, currentIndex) => {
        return accum += currentVal.value
      }, 0)

      setDealerPoints(dealerPoints)
      setPlayerPoints(playerPoints)
    }
  }, [ dealerCards, playerCards ])

  return (
    <div style={{ backgroundColor: "#1D2020", height: "80%" }}>
      <div
        style={{
          backgroundColor: "#744A35",
          height: "100%",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          borderBottom: "30px solid #744A35"
        }}
      >
        <div
          style={{
            backgroundColor: "#008000",
            height: "90%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%"
          }}
        >
          <div
            style={{
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {dealerCards.length > 0
              ? dealerCards.map((card, idx) => {
                  return (
                    <div
                      style={{
                        width: "75px",
                        height: "100px",
                        position: "relative",
                        margin: "0 -10px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#933d41",
                          borderRadius: "10px",
                          fontSize: "14px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute"
                        }}
                      >
                        <div>Mindfire</div>

                        <div>Blackjack</div>
                      </div>

                      {idx === 1 && !dealerSecondCardShown ? (
                        <div style={{ position: "absolute", zIndex: "-1" }}>
                          <img
                            style={{ width: "100%", height: "100%" }}
                            src={require("../Images/blackjackCards/".concat(
                              card.image
                            ))}
                          />
                        </div>
                      ) : (
                        <div style={{ position: "absolute" }}>
                          <img
                            style={{ width: "100%", height: "100%" }}
                            src={require("../Images/blackjackCards/".concat(
                              card.image
                            ))}
                          />
                        </div>
                      )}
                    </div>
                  );
                })
              : "Shuffling..."}
          </div>

          <div
            style={{
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {playerCards.length > 0
              ? playerCards.map((card, idx) => {
                  return (
                    <div
                      style={{
                        width: "75px",
                        height: "100px",
                        position: "relative",
                        margin: "0 -10px"
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#933d41",
                          borderRadius: "10px",
                          fontSize: "14px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute"
                        }}
                      >
                        <div>Mindfire</div>

                        <div>Blackjack</div>
                      </div>

                      <div style={{ position: "absolute" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={require("../Images/blackjackCards/".concat(
                            card.image
                          ))}
                        />
                      </div>
                    </div>
                  );
                })
              : "Shuffling..."}
          </div>
        </div>
      </div>
    </div>
  );
};
