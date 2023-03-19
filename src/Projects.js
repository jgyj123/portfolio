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
        inspiration="During the covid-19 pandemic, we created an online alternative
        for chess players around the world."
        tech={["React", "Firebase", "WebRTC", "ChakraUI"]}
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
        inspiration="Welfare distribution in hostels usually incur a significant amount of wastage. We aim to minimise that wastage."
        tech={["React", "Firebase", "MUI"]}
        website="https://devpost.com/software/super-supper"
        github="https://github.com/jgyj123/Super-Supper"
      />
      <ProjectTile
        img="Study Together.jpeg"
        name="Study Together"
        desc="A tool to help you network with others with similar academic background"
        inspiration="This application serves as a networking tool for students staying on campus."
        tech={["React", "Firebase", "MUI"]}
        website="https://devpost.com/software/study-together-ny5urc"
        github="https://github.com/jgyj123/Study-Together"
      />
    </Box>
  );
}

export default Projects;
