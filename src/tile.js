import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function Tile({ id }) {
  const [color, setColor] = useState("#ECEDF0");
  const idToColor = [
    0, 44, 88, 132, 176, 220, 264, 133, 134, 135, 136, 137, 93, 49, 5, 181, 225,
    269, 7, 51, 95, 139, 183, 227, 271, 8, 9, 10, 11, 140, 141, 142, 143, 271,
    272, 273, 274, 275, 13, 57, 101, 145, 189, 233, 277, 278, 279, 280, 281, 19,
    63, 107, 151, 195, 239, 283, 284, 285, 286, 287, 25, 26, 27, 28, 29, 30, 69,
    113, 157, 201, 245, 289, 290, 291, 292, 293, 294, 74, 118, 162, 206, 250,
    294, 32, 76, 120, 164, 208, 296, 211, 256, 301, 302, 303, 304, 305, 262,
    219, 81, 125, 85, 129,
  ];
  useEffect(() => {
    let offset = id % 132;
    setTimeout(() => {
      if (idToColor.indexOf(id) != -1) {
        let number = Math.floor(Math.random() * 3);
        let colors = ["#31A14E", "#40C463", "#9CE9A8"];
        setColor(colors[number]);
      }
    }, (id % 44) * 60 + offset * 3);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: "2px",
        width: "12px",
        height: "12px",
        margin: "3px",
      }}
    />
  );
}

export default Tile;
