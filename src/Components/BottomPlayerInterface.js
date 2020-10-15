import React, { useContext } from "react";
import PointCalculatorContext from "../Contexts/PointCalculatorContext";
import CardsContext from "../Contexts/CardsContext";
import CurrentTurnContext from "../Contexts/CurrentTurnContext";

export default () => {
  const { dealerPoints, playerPoints } = useContext(PointCalculatorContext);
  const {
    shuffledCards,
    cardsUsed,
    setCardsUsed,
    playerCards,
    setPlayerCards,
    dealerCards,
    setDealerCards
  } = useContext(CardsContext);

  const {
    currentTurn,
    setCurrentTurn
  } = useContext(CurrentTurnContext)

  const handleHitting = () => {
    const indexOfCardToAdd =
      shuffledCards.length - (shuffledCards.length - cardsUsed);
    const currentCards = [...playerCards];
    const cardToAdd = shuffledCards[indexOfCardToAdd];
    currentCards.push(cardToAdd);
    setPlayerCards(currentCards);
  };

  const handleHolding = () => {
    setCurrentTurn("dealer")
  };

  return (
    <div
      style={{
        height: "20%",
        backgroundColor: "#1D2020",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Dealer
        </div>

        <div style={{ paddingTop: "5px" }}>
          {
            currentTurn === null ? (
              "Initializing"
            ) : currentTurn === "dealer" ? (
              "Playing"
            ) : "Waiting..."
          }
        </div>

        <div style={{ paddingTop: "5px" }}>Current points: {dealerPoints}</div>
      </div>

      {
        currentTurn === null ? (
          <div>
            Initializing
          </div>
        ) : currentTurn === "player" ? (
          <div>
            <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
              Options
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "5px"
              }}
            >
              <div style={{ width: "40px" }} onClick={handleHitting}>
                Hit
              </div>

              <div style={{ width: "40px" }} onClick={handleHolding}>
                Hold
              </div>
            </div>
          </div>
        ) : null
      }

      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Player
        </div>

        <div style={{ paddingTop: "5px" }}>
          {
            currentTurn === null ? (
              "Initializing"
            ) : currentTurn === "player" ? (
              "Playing"
            ) : "Waiting..."
          }
        </div>

        <div style={{ paddingTop: "5px" }}>Current points: {playerPoints}</div>
      </div>
    </div>
  );
};
