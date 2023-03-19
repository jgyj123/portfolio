import React from "react";
import { Box, Typography, Paper, Avatar, Divider } from "@mui/material";
import { width } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AbsoluteCenter } from "@chakra-ui/react";

function AboutMe() {
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  return (
    (showText && (
      <Paper elevation="1" variant="outlined">
        <Box
          sx={{
            display: "flex",
            margin: 4,
            width: "800px;",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginRight: "40px;",
            }}
          >
            <Typography noWrap fontSize="20px">
              ABOUT ME
            </Typography>
          </Box>

          <Typography color="rgb(101,101,101)">
            Hi! Im Jonathan, a year 2 Computer Science student currently
            studying at the National University of Singapore. I am a passionate
            full stack developer with 2 years of experience. I look forward to
            working with you :)
          </Typography>
        </Box>
      </Paper>
    )) ||
    (!showText && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src="profile.jpeg"
          sx={{ width: "320px", height: "320px", marginBottom: "4vh" }}
        />
        <Typography color="rgb(101,101,101)">
          Hi! Im Jonathan, a year 2 Computer Science student currently studying
          at the National University of Singapore. I am a passionate full stack
          developer with 2 years of experience. I look forward to working with
          you :)
        </Typography>

        <Box
          sx={{
            display: "flex;",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "10px;",
          }}
        >
          <a href="https://github.com/jgyj123" target="_blank">
            <Avatar
              src="github-mark.png"
              sx={{ width: "48px", height: "48px", marginRight: 2 }}
            ></Avatar>
          </a>
          <a href="https://t.me/jgyj123" target="_blank">
            <Avatar
              src="telegram-logo-944.png"
              sx={{ width: "48px", height: "48px", marginRight: 2 }}
            />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-goh2/" target="_blank">
            <Avatar
              src="linkedin.png"
              variant="square"
              sx={{
                width: "44px",
                height: "44px",
                color: "green;",
                marginRight: 2,
              }}
            ></Avatar>
          </a>
        </Box>
      </Box>
    ))
  );
}
export default AboutMe;
