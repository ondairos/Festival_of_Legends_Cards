import React from "react";
import "./styles.css";

interface Props {
  changeClass: (c: string) => void;
}

const ClassButtons: React.FC<Props> = ({ changeClass }) => {
  return (
    <div>
      <button className="choose-button" onClick={() => changeClass("druid")}>
        Druid
      </button>
      <button className="choose-button" onClick={() => changeClass("warlock")}>
        Warlock
      </button>
      <button className="choose-button" onClick={() => changeClass("hunter")}>
        Hunter
      </button>
      <button
        className="choose-button dh"
        onClick={() => changeClass("demon_hunter")}
      >
        Demon Hunter
      </button>
    </div>
  );
};

export default ClassButtons;
