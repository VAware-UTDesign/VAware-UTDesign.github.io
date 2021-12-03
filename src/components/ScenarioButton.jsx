import { Card, CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TestButton = ({ toSearch, color, textColor, title }) => {
  return (
    <Link
      to={{
        pathname: "/scenario",
        currentScenario: 1,
        search: toSearch,
      }}
    >
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
          <CardActionArea>
            <Typography
              sx={{ fontSize: 200, fontWeight: "bold" }}
              variant="h1"
              component="div"
            >
              {title}
            </Typography>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
};

export default TestButton;
