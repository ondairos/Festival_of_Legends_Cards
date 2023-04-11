import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";
import ClassButtons from "./components/ClassButtons";

interface Card {
  cardId: string;
  cardImg: string;
  cardName: string;
}

// cardData type
interface CardData {
  [key: string]: Card[];
}

function App(): JSX.Element {
  const [classChoose, setClassChoose] = useState<string>("warlock");
  const [cardData, setCardData] = useState<Card[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const allDataFetch = await axios.get<Card[]>(`/api/${classChoose}`);
      setCardData(allDataFetch.data);
      // console.log(cardData);
    };
    fetchAllData();
  }, [classChoose]);

  // change class func
  const changeClass = (c: string) => {
    setClassChoose(c);
  };

  // class title to uppercase and remove _
  const formatted_class_title = classChoose
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // which color
  const color_class_picker = (class_name: string) => {
    switch (class_name) {
      case "warlock":
        // return css for purple?
        return "#8788EE";
      case "rogue":
        return "#FFF468";
      case "mage":
        return "#3FC7EB";
      case "paladin":
        return "#F48CBA";
      case "hunter":
        return "green";
      case "warrior":
        return "brown";
      case "druid":
        return "orange";
      case "priest":
        return "white";
      case "shaman":
        return "#018dff";
      case "demon_hunter":
        return "#A330C9";
      case "death_knight":
        return "#C41E3A";
    }
  };

  return (
    <div className="App">
      <h1>Hearthstone: Festival of Legends Expansion</h1>
      <h2
        className="form_class--title"
        style={{ color: color_class_picker(classChoose) }}
      >
        {formatted_class_title}
      </h2>
      <ClassButtons changeClass={changeClass} />
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
      <Footer />
    </div>
  );
}

export default App;
