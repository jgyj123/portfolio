import * as React from "react";
import ProjectTile from "./ProjectTile";
import { Box } from "@mui/material";
function Projects() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <ProjectTile
        img="BetterChess.png"
        name="Better Chess"
        desc="Play chess with your friends online with video calling features"
        inspiration="During the covid-19 pandemic, we wanted to create an application
        that allows users to play chess online, while at the same time maintaining the
        tangible aspects of the game such as face-face interaction."
        tech={["ReactJS", "Firebase", "WebRTC", "ChakraUI"]}
        website="https://orbital-fried-liver.web.app/login"
        github="https://github.com/jgyj123/Orbital-Project"
      />
      <ProjectTile
        img="watson.png"
        name="Watson"
        desc="An application that helps teachers keep track of student data"
        inspiration="Teachers are very busy and overworked in Singapore. This application helps teachers to manage student data with ease."
        tech={["Java", "JavaFx", "Junit5", "Github"]}
        website="https://ay2223s1-cs2103t-t08-1.github.io/tp/"
        github="https://github.com/AY2223S1-CS2103T-T08-1/tp"
      />
      <ProjectTile
        img="Super Supper.jpeg"
        name="Super Supper"
        desc="A web app that helps to streamline the process of distributing welfare in NUS halls"
        inspiration="Supper distribution in halls usually incur a significant amount of wastage due to a mismatch in the expected turnout and actual turnout. This application helps to minimise food wastage and save money."
        tech={["ReactJS", "Firebase", "MUI"]}
        website="https://devpost.com/software/super-supper"
        github="https://github.com/jgyj123/Super-Supper"
      />
      <ProjectTile
        img="Study Together.jpeg"
        name="Study Together"
        desc="A tool to help you network with others with similar academic background"
        inspiration="During the covid-19 pandemic, it was hard for students to find friends from similar academic backgrounds due to social distancing measures. This application serves as a networking tool for residents."
        tech={["ReactJS", "Firebase", "MUI"]}
        website="https://devpost.com/software/study-together-ny5urc"
        github="https://github.com/jgyj123/Study-Together"
      />
    </Box>
  );
}

export default Projects;
