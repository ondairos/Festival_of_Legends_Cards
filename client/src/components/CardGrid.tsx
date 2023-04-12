import React from "react";
import "../App.css";

interface Card {
  cardId: string;
  cardImg: string;
  cardName: string;
}

// cardData type
interface CardData {
  [key: string]: Card[];
}

interface Props {
  cardData: Card[];
}

const CardGrid: React.FC<Props> = ({ cardData }) => {
  return (
    <div className="card-grid">
      {cardData.map((element: Card) => {
        return (
          <div className="card" key={element.cardId}>
            <img className="card-image" src={element.cardImg} alt="image" />
            <li className="card-name">{element.cardName}</li>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
