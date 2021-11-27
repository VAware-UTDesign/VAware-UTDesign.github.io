import { Grid } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import HorizontalScroll from "react-scroll-horizontal";
import { activatePneumatic } from "../actions";
import TestButton from "../components/TestButton";
import ScenarioButton from "../components/ScenarioButton";

const Home = () => {
  const dispatch = useDispatch();
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
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("1"))}
            color="red"
            textColor="white"
            title="Red"
          />
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("2"))}
            color="white"
            textColor="black"
            title="White"
          />
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("3"))}
            color="green"
            textColor="white"
            title="Green"
          />
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("4"))}
            color="blue"
            textColor="white"
            title="Blue"
          />
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("5"))}
            color="yellow"
            textColor="black"
            title="Yellow"
          />
          <TestButton
            handleEvent={() => dispatch(activatePneumatic("6"))}
            color="black"
            textColor="white"
            title="Black"
          />
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
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("1"))}
            color="lightgreen"
            textColor="white"
            title="🙀"
          />
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("2"))}
            color="white"
            textColor="black"
            title="White"
          />
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("3"))}
            color="green"
            textColor="white"
            title="Green"
          />
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("4"))}
            color="blue"
            textColor="white"
            title="Blue"
          />
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("5"))}
            color="yellow"
            textColor="black"
            title="Yellow"
          />
          <ScenarioButton
            handleEvent={() => dispatch(activatePneumatic("6"))}
            color="black"
            textColor="white"
            title="Black"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
