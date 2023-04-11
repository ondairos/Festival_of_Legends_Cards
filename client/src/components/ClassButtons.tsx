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
      <button className="choose-button" onClick={() => changeClass("shaman")}>
        Shaman
      </button>
      <button className="choose-button" onClick={() => changeClass("warrior")}>
        Warrior
      </button>
      <button className="choose-button" onClick={() => changeClass("rogue")}>
        Rogue
      </button>
      <button
        className="choose-button dh"
        onClick={() => changeClass("demon_hunter")}
      >
        Demon Hunter
      </button>
      <button
        className="choose-button dh"
        onClick={() => changeClass("death_knight")}
      >
        Death Knight
      </button>
    </div>
  );
};

export default ClassButtons;
