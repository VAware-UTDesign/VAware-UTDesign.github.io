import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { activatePneumatic, connectToBluetooth } from "./actions";

function App() {
  const isConnected = useSelector((state) => state.isConnected);
  console.log(isConnected);

  const dispatch = useDispatch();

  return (
    <div className="App">
      {!isConnected && (
        <button onClick={() => dispatch(connectToBluetooth())}>Connect</button>
      )}
      {isConnected && (
        <div>
          <button onClick={() => dispatch(activatePneumatic("1"))}>red</button>
          <button onClick={() => dispatch(activatePneumatic("2"))}>
            white
          </button>
          <button onClick={() => dispatch(activatePneumatic("3"))}>
            green
          </button>
          <button onClick={() => dispatch(activatePneumatic("4"))}>blue</button>
          <button onClick={() => dispatch(activatePneumatic("5"))}>
            yellow
          </button>
          <button onClick={() => dispatch(activatePneumatic("6"))}>
            black
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
