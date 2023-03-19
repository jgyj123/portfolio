import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function MiniTile({ content }) {
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  const pad = showText ? "5px" : "1vw";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F1F1",
        margin: "2px",
        padding: pad,
        borderRadius: "3px",
      }}
    >
      <Typography color="rgb(101,101,101)" fontSize={showText ? "12px" : "3vw"}>
        {content}
      </Typography>
    </Box>
  );
}

export default MiniTile;
