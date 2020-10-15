import React, { useContext } from "react";
import PointCalculatorContext from "../Contexts/PointCalculatorContext";

export default () => {
  const { dealerPoints, playerPoints } = useContext(PointCalculatorContext);

  const handleHitting = () => {
    console.log("hitting");
  };

  const handleHolding = () => {
    console.log("holding");
  };

  return (
    <div
      style={{
        height: "20%",
        backgroundColor: "#1D2020",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Dealer
        </div>

        <div style={{ paddingTop: "5px" }}>Waiting...</div>

        <div style={{ paddingTop: "5px" }}>Current points: {dealerPoints}</div>
      </div>

      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Options
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px"
          }}
        >
          <div style={{ width: "40px" }} onClick={handleHitting}>
            Hit
          </div>

          <div style={{ width: "40px" }} onClick={handleHolding}>
            Hold
          </div>
        </div>
      </div>

      <div>
        <div style={{ borderBottom: "1px solid #CCC", textAlign: "center" }}>
          Player
        </div>

        <div style={{ paddingTop: "5px" }}>Playing</div>

        <div style={{ paddingTop: "5px" }}>Current points: {playerPoints}</div>
      </div>
    </div>
  );
};
