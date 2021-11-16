import React from "react";
import { clsx } from "@/utils";
import cover from "@/image/cover.png";

export function SingleCard({ card, handleChoice, flipped, disabled }) {
  return (
    <div className="relative m-1">
      <img
        className={clsx(
          "w-full block border border-white rounded-md",
          "absolute transition-all ease-in delay-[0.2s]",
          flipped ? "rotate-y-0" : "rotate-y-90"
        )}
        src={card.src}
        alt="card front"
      />
      <img
        onClick={() => !disabled && handleChoice(card)}
        className={clsx(
          "w-full block border border-white rounded-md",
          "transition-all ease-in delay-[0.2s]",
          flipped ? "rotate-y-90 delay-[0s]" : ""
        )}
        src={cover}
        alt="cover"
      />
    </div>
  );
}
