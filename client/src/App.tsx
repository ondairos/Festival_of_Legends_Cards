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

  return (
    <div className="App">
      <h1>Festival of Legends Expansion</h1>
      <h2>{classChoose}</h2>
      <ClassButtons changeClass={changeClass} />
      <div className="card-grid">
        {cardData.map((element: Card) => {
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
