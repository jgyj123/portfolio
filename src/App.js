import "./App.css";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";

import { Avatar, Typography, Divider } from "@mui/material";
import SideBar from "./SideBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonAppBar from "./AppBar";
import { green } from "@mui/material/colors";

function App() {
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  return (
    (showText && (
      <div>
        {/* <Box
          sx={{
            margin: 0,
            padding: 0,
            height: "6vh;",
            backgroundColor: "#F7F8FA",
          }}
        ></Box>
        <Divider sx={{}} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignSelf: "center",
            fontFamily: "Comic Sans",
          }}
        >
          <SideBar />
          <Box>
            <Navigation />
          </Box>
        </Box>
      </div>
    )) ||
    (!showText && !showText && (
      <Box sx={{ padding: "2vw" }}>
        <Box>
          <Navigation />
        </Box>
      </Box>
    ))
  );
}

export default App;
