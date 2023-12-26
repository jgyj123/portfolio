import * as React from "react";
import ProjectTile from "./ProjectTile";
import { Box } from "@mui/material";
function Projects() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <ProjectTile
        img="BetterChess.png"
        name="Better Chess"
        desc="Play chess with your friends online"
        inspiration="During the covid-19 pandemic, we created an online alternative
        for chess players around the world."
        tech={["React", "Firebase", "WebRTC", "ChakraUI"]}
        website="https://orbital-fried-liver.web.app/login"
        github="https://github.com/jgyj123/Orbital-Project"
      />
      <ProjectTile
        img="slions2.png"
        name="SLIONS-Kids"
        desc="AI-generated feedback for language learning"
        inspiration="We wanted to a tool that can help children improve their pronunciation using AI-generated feedback"
        tech={["React", "NodeJS", "MYSQL"]}
        website="https://smcnus.comp.nus.edu.sg/video_page"
      />
      <ProjectTile
        img="watson.png"
        name="Watson"
        desc="Keep track of student data easily"
        inspiration="Teachers are very busy and overworked in Singapore. This application helps teachers to manage student data with ease."
        tech={["Java", "JavaFx", "Junit5", "Github"]}
        website="https://ay2223s1-cs2103t-t08-1.github.io/tp/"
        github="https://github.com/AY2223S1-CS2103T-T08-1/tp"
      />

      <ProjectTile
        img="Super Supper.jpeg"
        name="Super Supper"
        desc="No more wasted food in welfare distributions"
        inspiration="Welfare distribution in hostels usually incur a significant amount of wastage. We aim to minimise that wastage."
        tech={["React", "Firebase", "MUI"]}
        website="https://devpost.com/software/super-supper"
        github="https://github.com/jgyj123/Super-Supper"
      />
    </Box>
  );
}

export default Projects;
