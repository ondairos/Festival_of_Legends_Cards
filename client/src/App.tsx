import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";

interface Card {
  cardId: string;
  cardImg: string;
  cardName: string;
}

// cardData type
interface CardData {
  [key: string]: Card[];
}

function App() {
  const [classChoose, setClassChoose] = useState<string>("");
  const [cardData, setCardData] = useState<Card[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const allDataFetch = await axios.get("/api/druid");
      setCardData(allDataFetch.data);
      console.log(cardData);
    };
    fetchAllData();
  }, []);

  return (
    <div className="App">
      <h1>Festival of Legends Expansion</h1>
      <h2>Druid</h2>
      <div className="card-grid">
        {cardData.map((element) => {
          return (
            <div className="card" key={element.cardId}>
              <li className="card-name">{element.cardName}</li>
              <img className="card-image" src={element.cardImg} alt="image" />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
