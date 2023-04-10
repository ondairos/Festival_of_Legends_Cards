import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState<number>(0);
  const [cardData, setCardData] = useState<string[]>([]);

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
      <h2>Druid</h2>
      {cardData.map((element) => {
        return (
          <div key={element.cardId}>
            <li>{element.cardName}</li>
            <img src={element.cardImg} alt="image" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
