import { CardActionArea, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { activatePneumatic } from "../actions";

const ScenesButton = ({ pnuematic, color, textColor, title, audio }) => {
  const dispatch = useDispatch();
  let toPlay = new Audio(audio);

  const doScene = () => {
    toPlay.play();
    dispatch(activatePneumatic(pnuematic));
  };

  return (
    <Box sx={{ boxShadow: 6, m: 1, pt: 2 }}>
      <Paper
        raised={true}
        variant="outlined"
        sx={{
          display: "inline-block",
          borderRadius: 7,
          minWidth: 275,
          minHeight: 350,
          background: color,
          color: textColor,
        }}
      >
        <CardActionArea onClick={() => doScene()}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <br />
          </Typography>
          <Typography sx={{ fontSize: 150 }} variant="h1" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Typography>
        </CardActionArea>
      </Paper>
    </Box>
  );
};

export default ScenesButton;
