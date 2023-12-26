import * as React from "react";
import "./ProjectTile.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper, Box, Image, Divider, Link } from "@mui/material";
import MiniTile from "./MiniTile";
import { green } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ProjectTile({ img, name, desc, inspiration, tech, website, github }) {
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  const width = github ? "50%" : "0%";
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" />
          <Typography
            fontSize={showText ? "1.5vw" : "16px"}
            sx={{ marginTop: "1vw" }}
          >
            {" "}
            {name}
          </Typography>
          <Typography
            fontSize={showText ? "1vw" : "3vw"}
            color="rgb(101,101,101)"
            sx={{ marginBottom: "1vw" }}
          >
            {desc}
          </Typography>
        </div>
        <div className="flip-card-back">
          <Typography fontSize="25px"> {name}</Typography>
          <Divider />
          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  marginRight: "20px;",
                }}
              >
                <Typography fontSize={showText ? "1.2vw" : "3vw"}>
                  Inspiration
                </Typography>
              </Box>

              <Typography
                fontSize={showText ? "1vw" : "3vw"}
                color="rgb(101,101,101)"
                textAlign="left"
              >
                {inspiration}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginRight: "20px",
                }}
              >
                <Typography
                  fontSize={showText ? "1.2vw" : "3vw"}
                  sx={{
                    width: "5vw",
                  }}
                >
                  Tools
                </Typography>
              </Box>

              {tech.map((skill) => {
                return <MiniTile content={skill} />;
              })}
            </Box>

            <div className="links">
              <Link
                href={website}
                target="_blank"
                underline="none"
                sx={{
                  borderRadius: 0,
                }}
              >
                <button className="website-button">Website</button>
              </Link>

              <Link
                href={github}
                target="_blank"
                underline="none"
                sx={{
                  borderRadius: 0,
                }}
              >
                {github ? (
                  <button className="github-button">Code</button>
                ) : (
                  false
                )}
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
