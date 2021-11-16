import React, { useEffect, useState } from "react";
import { clsx, useMatchGame } from "@/utils";
import { SingleCard } from "@/components";

function App() {
  const {
    cards,
    turns,
    choiceOne,
    disabled,
    choiceTwo,
    shuffleCards,
    handleChoice,
  } = useMatchGame();
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="max-w-[860px] mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold py-5">Magic Match</h1>
      <button
        onClick={shuffleCards}
        className={clsx(
          "py-1 px-1.5",
          "font-bold text-sm",
          "border border-white",
          "hover:bg-red-400"
        )}
      >
        New Game
      </button>
      <div className="grid grid-cols-4 gap-3 my-10">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="">Turns: {turns}</p>
    </div>
  );
}

export default App;
