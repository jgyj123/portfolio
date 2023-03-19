import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HiOutlineBookOpen } from "react-icons/hi";
import { GoRepo } from "react-icons/go";
import { BsCodeSquare } from "react-icons/bs";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const showText = useMediaQuery("(min-width:1000px)");
  return (
    (showText && (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#F78166",
              },
            }}
          >
            <Tab
              icon={<HiOutlineBookOpen fontSize="26" />}
              iconPosition="start"
              label="Overview"
              {...a11yProps(0)}
            ></Tab>

            <Tab
              label="Projects"
              icon={<BsCodeSquare fontSize="20" />}
              iconPosition="start"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AboutMe />
          <Welcome />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Projects />
        </TabPanel>
      </Box>
    )) ||
    (!showText && (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="basic tabs example"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#F78166",
              },
            }}
          >
            <Tab
              icon={<HiOutlineBookOpen fontSize="26" />}
              sx={{}}
              iconPosition="start"
              label="Overview"
              {...a11yProps(0)}
            ></Tab>

            <Tab
              sx={{}}
              label="Projects"
              icon={<BsCodeSquare fontSize="20" />}
              iconPosition="start"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AboutMe />
          <Welcome />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Projects />
        </TabPanel>
      </Box>
    ))
  );
}
