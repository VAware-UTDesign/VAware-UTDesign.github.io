import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import ConnectPage from "./pages/ConnectPage";
import BleNotSupported from "./pages/BleNotSupported";
import Home from "./pages/Home";

function App() {
  const [supportsBluetooth, setSupportsBluetooth] = useState(false);
  const isConnected = useSelector((state) => state.isConnected);

  useEffect(() => {
    if (navigator.bluetooth) {
      setSupportsBluetooth(true);
    }
  }, []);

  return (
    <div>
      {!supportsBluetooth && !isConnected && (
        <div>
          <BleNotSupported />
        </div>
      )}
      {!isConnected && supportsBluetooth && (
        <div>
          <ConnectPage />
        </div>
      )}
      {isConnected && (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
