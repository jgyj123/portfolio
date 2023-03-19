import "./App.css";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { flexbox } from "@chakra-ui/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  return (
    (showText && (
      <Box sx={{ display: "flex", padding: "2vw", justifyContent: "center" }}>
        <SideBar />
        <Box>
          <Navigation />
        </Box>
      </Box>
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
