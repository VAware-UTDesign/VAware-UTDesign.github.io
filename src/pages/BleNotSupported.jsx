import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const BleNotSupported = () => {
  return (
    <Box>
      <Grid>
        <Grid>
          <h1>😔 This Browser does not support Bluetooth</h1>
        </Grid>
        <p>
          If you are using an iPhone please use this&nbsp;
          <a
            href="https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055"
            target="_blank"
            rel="noopener noreferrer"
          >
            browser
          </a>
          &nbsp;to control the device.
        </p>
        <p>
          If you are using an Android Device, Please use the default Chrome
          browser, and enable bluetooth settings
        </p>
        <p>
          Chrome supports Bluetooth connections on Mac devices and most Windows
          computers
        </p>
        {/* <p>
          If you would like to learn more about this project you can check it
          out over&nbsp;<a href="">here</a>&nbsp;
        </p> */}
      </Grid>
    </Box>
  );
};

export default BleNotSupported;
