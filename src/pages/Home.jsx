import React from "react";
import TestButton from "../components/TestButton";
import ScenarioButton from "../components/ScenarioButton";
import testData from "../data/test-data";
import homeScenarioData from "../data/home-scenario-data";

const Home = () => {
  return (
    <div>
      <h1>Test</h1>
      <br />
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            overflow: "auto",
            display: "flex",
            msOverflowStyle: "none",
          }}
        >
          {testData.map((data) => {
            return (
              <TestButton
                pnuematic={data.pnuematic}
                color={data.color}
                textColor={data.textColor}
                title={data.title}
                subtitle={data.subtitle}
              />
            );
          })}
        </div>
      </div>

      <h1>Scenarios</h1>
      <br />
      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            overflow: "auto",
            display: "flex",
            msOverflowStyle: "none",
          }}
        >
          {homeScenarioData.map((data) => {
            return (
              <ScenarioButton
                toSearch={data.toSearch}
                color={data.color}
                textColor={data.textColor}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
