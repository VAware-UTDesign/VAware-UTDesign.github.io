import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { connectToBluetooth } from "./actions";

function App() {
  //const connect = useSelector((state) => state.connect);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(connectToBluetooth);
  // }, []);
  return (
    <div className="App">
      <button onClick={() => dispatch(connectToBluetooth())}>Connect</button>
    </div>
  );
}

export default App;
