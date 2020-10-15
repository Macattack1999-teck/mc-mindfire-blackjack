import React, { useState } from "react";
import CardsContext from "../Contexts/CardsContext";

export default props => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [cardsUsed, setCardsUsed] = useState(0);

  const state = {
    shuffledCards,
    setShuffledCards,
    playerCards,
    setPlayerCards,
    dealerCards,
    setDealerCards,
    cardsUsed,
    setCardsUsed
  };

  return (
    <CardsContext.Provider value={state}>
      {props.children}
    </CardsContext.Provider>
  );
};
