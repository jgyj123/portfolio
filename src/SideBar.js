import React from "react";
import { Avatar, Typography, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { BsTelegram, BsGithub } from "react-icons/bs";
function SideBar() {
  return (
    <Box sx={{ marginLeft: "4vw", marginRight: "2vw", marginTop: "5vh;" }}>
      <Avatar src="profile.jpeg" sx={{ width: "20vw", height: "20vw" }} />
      <Typography fontSize="32px" textAlign="center;">
        Jonathan Goh
      </Typography>
      <Divider sx={{ margin: 1 }} />
      <Box>
        <Typography
          fontSize="20px"
          color="rgb(101,101,101)"
          textAlign="center;"
        >
          Contact Me
        </Typography>
        <Box
          sx={{
            display: "flex;",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/jgyj123" target="_blank">
            <Avatar
              src="github-mark.png"
              sx={{ width: "48px", height: "48px" }}
            ></Avatar>
          </a>
          <a href="https://t.me/jgyj123" target="_blank">
            <Avatar
              src="telegram-logo-944.png"
              sx={{ width: "48px", height: "48px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-goh2/" target="_blank">
            <Avatar
              src="linkedin.png"
              variant="square"
              sx={{ width: "44px", height: "44px", color: "green;" }}
            ></Avatar>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
