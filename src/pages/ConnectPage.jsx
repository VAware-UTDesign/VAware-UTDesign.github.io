import { Fab } from "@mui/material";
import React from "react";
import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";
import { useDispatch } from "react-redux";
import { connectToBluetooth } from "../actions";
import { Box } from "@mui/system";

const ConnectButton = ({ label, handleEvent }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fab
        sx={{ borderRadius: 5 }}
        onClick={() => dispatch(connectToBluetooth())}
        variant="extended"
      >
        <BluetoothConnectedIcon />
        Connect
      </Fab>
    </Box>
  );
};

export default ConnectButton;
