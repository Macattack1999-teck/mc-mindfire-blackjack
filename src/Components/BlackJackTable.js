import React, { useState, useEffect, useContext } from "react";
import Cards from "../Utilities/Cards";
import PointCalculatorContext from "../Contexts/PointCalculatorContext";
import CardsContext from "../Contexts/CardsContext";
import CurrentTurnContext from "../Contexts/CurrentTurnContext";
import EndGameContext from "../Contexts/EndGameContext";

export default () => {
  const [cards, setCards] = useState(Cards);
  const [dealerSecondCardShown, setDealerSecondCardShown] = useState(false);
  const [dealerHasHighAces, setDealerHasHighAces] = useState(false);
  const {
    dealerPoints,
    setDealerPoints,
    playerPoints,
    setPlayerPoints
  } = useContext(PointCalculatorContext);

  const {
    shuffledCards,
    setShuffledCards,
    dealerCards,
    setDealerCards,
    playerCards,
    setPlayerCards,
    cardsUsed,
    setCardsUsed
  } = useContext(CardsContext);

  const { currentTurn, setCurrentTurn } = useContext(CurrentTurnContext);

  const {
    wins,
    setWins,
    loses,
    setLoses,
    setEndGame
  } = useContext(EndGameContext)

  useEffect(() => {
    setShuffledCards(cards.sort(() => 0.5 - Math.random()));
  }, []);

  useEffect(() => {
    if (shuffledCards.length > 0) {
      setDealerCards([shuffledCards[0], shuffledCards[1]]);
      setPlayerCards([shuffledCards[2], shuffledCards[3]]);
      setCardsUsed(4);
      setCurrentTurn("player");
    }
  }, [shuffledCards]);

  useEffect(() => {
    if (dealerCards.length > 0 && playerCards.length > 0) {
      const calculatedDealerPoints = dealerCards.reduce(
        (accum, currentVal, currentIndex) => {
          if (!dealerSecondCardShown && currentIndex === 1) {
            return (accum += 0);
          }

          if (dealerPoints > 10 && currentVal.value === 11) {
            if (!dealerHasHighAces) {
              setDealerHasHighAces(true);
            }

            return (accum += 1);
          }

          return (accum += currentVal.value);
        },
        0
      );

      const playerPoints = playerCards.reduce(
        (accum, currentVal, currentIndex) => {
          return (accum += currentVal.value);
        },
        0
      );

      setDealerPoints(calculatedDealerPoints);
      setPlayerPoints(playerPoints);
    }
  }, [dealerCards, playerCards, dealerSecondCardShown]);

  useEffect(() => {
    if (currentTurn !== null && currentTurn === "dealer") {
      if (!dealerSecondCardShown) {
        setDealerSecondCardShown(true);
      }
    }
  }, [currentTurn]);

  useEffect(() => {
    if (dealerSecondCardShown) {
      const indexOfCardToAdd =
        shuffledCards.length - (shuffledCards.length - cardsUsed);
      const currentCards = [...dealerCards];
      const cardToAdd = shuffledCards[indexOfCardToAdd];
      currentCards.push(cardToAdd);

      if (dealerPoints < 17) {
        //hit
        setDealerCards(currentCards);
      } else if (dealerHasHighAces && dealerPoints < 18) {
        //hit
        setDealerCards(currentCards);
      } else if (dealerPoints < playerPoints) {
        setDealerCards(currentCards);
        //hit
      } else {
        if (dealerPoints > 21) {
          setWins(wins + 1)
        } else if (playerPoints > 21) {
          setLoses(loses + 1)
        } else if (dealerPoints > playerPoints) {
          setLoses(loses + 1)
        } else if (playerPoints > dealerPoints) {
          setWins(wins + 1)
        }
        // end game
      }
    }
  }, [dealerPoints]);

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
