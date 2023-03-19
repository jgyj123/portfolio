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
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" />
          <Typography fontSize="25px"> {name}</Typography>
          <Typography fontSize="16px" color="rgb(101,101,101)">
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
                <Typography fontSize="20px">Inspiration</Typography>
              </Box>

              <Typography
                fontSize="16px"
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
                <Typography fontSize="20px">Tools used</Typography>
              </Box>

              {tech.map((skill) => {
                return <MiniTile content={skill} />;
              })}
            </Box>

            <Box
              sx={{
                marginRight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "50%",
                  borderRadius: 0,
                }}
              >
                <Link href={website} target="_blank" underline="none">
                  WEBSITE
                </Link>
              </Button>

              <Button variant="outlined" sx={{ width: "50%", borderRadius: 0 }}>
                <Link href={github} target="_blank" underline="none">
                  CODE
                </Link>
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
