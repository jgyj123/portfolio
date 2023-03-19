import React from "react";
import { Box, Typography } from "@mui/material";
function MiniTile({ content }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F1F1",

        margin: "2px",
        padding: "5px",
        borderRadius: "3px",
      }}
    >
      <Typography color="rgb(101,101,101)" fontSize="12px">
        {content}
      </Typography>
    </Box>
  );
}

export default MiniTile;
