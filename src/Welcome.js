import React from "react";
import Tile from "./tile";
import { Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Welcome() {
  const squares = [...Array(308).keys()];
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  return (
    showText && (
      <Paper variant="outlined" style={{ marginTop: 20 }}>
        <Grid container sx={{ width: "800px", margin: 4 }}>
          {squares.map((num) => {
            return (
              <Grid item xs={0}>
                <Tile id={num} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    )
  );
}

export default Welcome;
