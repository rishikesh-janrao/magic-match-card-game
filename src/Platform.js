import React, { useMemo, useState } from "react";
import Card from "./Card";

function Platform({ started }) {
  const [totalTurns, setTotalTurns] = useState(0);
  const Cards = [
    { id: 0, content: "A" },
    { id: 1, content: "C" },
    { id: 2, content: "B" },
    { id: 3, content: "B" },
    { id: 4, content: "A" },
    { id: 5, content: "B" },
    { id: 6, content: "C" },
    { id: 7, content: "C" },
    { id: 8, content: "A" },
    { id: 9, content: "C" },
    { id: 10, content: "B" },
    { id: 11, content: "A" },
  ];

  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedPairs, setSelectedPairs] = useState([]);

  const getIsPairMatched = () => {
    const firstCardContent = Cards.find(
      (c) => c.id === selectedCards[0]
    ).content;
    const secondCardContent = Cards.find(
      (c) => c.id === selectedCards[1]
    ).content;
    if (firstCardContent === secondCardContent) {
      setSelectedPairs((prev) => [...prev, selectedCards]);
    }
  };
  return (
    started && (
      <div className="platform">
        <div className="cards-container">
          {Cards.map(({ id, content }) => (
            <Card
              content={content}
              id={id}
              key={id}
              isActive={
                !!selectedPairs.find(
                  (pair) => pair[0] === id || pair[1] === id
                ) || selectedCards.includes(id)
              }
              isValid={
                !!selectedPairs.find((pair) => pair[0] === id || pair[1] === id)
              }
              onClick={(e) => {
                if (!selectedCards.includes(id)) {
                  setSelectedCards((prev) => [...prev, id]);
                  if (selectedCards.length === 2) {
                    getIsPairMatched();
                    setSelectedCards([]);
                    setTotalTurns((prev) => prev + 1);
                  }
                }
                e.preventDefault();
              }}
            />
          ))}
        </div>
        <h3>Total Turns : {totalTurns} </h3>
        <label>✅ - {selectedPairs.length} | ❌ - {totalTurns - selectedPairs.length}</label>
      </div>
    )
  );
}

export default Platform;
