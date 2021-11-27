import {
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {} from "@mui/material";
import React from "react";

const TestButton = ({ handleEvent, color, textColor, title }) => {
  return (
    <Box m={2} pt={2}>
      <Card
        elevation={3}
        variant="outlined"
        sx={{
          display: "inline-block",
          borderRadius: 7,
          minWidth: 350,
          minHeight: 350,
          background: color,
          color: textColor,
        }}
      >
        <CardActionArea onClick={handleEvent}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h1" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default TestButton;
