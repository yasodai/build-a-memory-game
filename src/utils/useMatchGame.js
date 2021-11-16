import React, { useEffect, useState } from "react";

const cardImages = [
  { src: "/src/image/helmet-1.png", matched: false },
  { src: "/src/image/potion-1.png", matched: false },
  { src: "/src/image/ring-1.png", matched: false },
  { src: "/src/image/scroll-1.png", matched: false },
  { src: "/src/image/shield-1.png", matched: false },
  { src: "/src/image/sword-1.png", matched: false },
];
export function useMatchGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceTwo && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 600);
      }
    }
  }, [choiceTwo, choiceTwo]);
  return {
    cards,
    turns,
    choiceOne,
    choiceTwo,
    disabled,
    shuffleCards,
    handleChoice,
  };
}
