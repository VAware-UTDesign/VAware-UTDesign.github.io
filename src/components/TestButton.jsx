import { CardActionArea, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { activatePneumatic } from "../actions";

const TestButton = ({ pnuematic, color, textColor, title, subtitle }) => {
  const dispatch = useDispatch();
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
        <CardActionArea onClick={() => dispatch(activatePneumatic(pnuematic))}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <br />
          </Typography>
          <Typography sx={{ fontSize: 50 }} variant="h1" component="div">
            {title}
          </Typography>
          <br />
          <Typography
            sx={{ fontSize: 30, fontWeight: "bold" }}
            variant="h1"
            component="div"
          >
            {subtitle}
          </Typography>
          <Typography variant="body2">
            <br />
            <br />
            <br />
            <br />
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

export default TestButton;
