import * as React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useLocation } from "react-router-dom";
import ScenesButton from "../components/ScenesButton";
import scenarioData from "../data/scenario-data";

export default function ScenarioPage() {
  const location = useLocation();
  console.log(location.search);
  const toSearch = location.search;

  return (
    <div>
      <h1>Scenario</h1>
      <div
        style={{
          width: "100%",
          height: "auto",
          overflow: "auto",
          display: "flex",
          msOverflowStyle: "none",
        }}
      >
        {scenarioData[toSearch].map((doings) => {
          return (
            <ScenesButton
              pnuematic={doings.pnuematic}
              color={doings.color}
              textColor={doings.textColor}
              title={doings.title}
              audio={doings.audio}
            />
          );
        })}
      </div>
    </div>
  );
}
