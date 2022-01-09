import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../../../pages/Home";
import Articles from "../../../pages/Articles";
import Magzines from "../../../pages/Magzines";
import Tarbiyatchannel from "../../../pages/Tarbiyatchannel";
import Publications from "../../../pages/Publications";
import News from "../../../pages/News";
import Events from "../../../pages/Events";
import Photos from "../../../pages/Photos";
import DailyDua from "../../../pages/DailyDua";
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

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab
            icon={<HomeIcon />}
            iconPosition="start"
            label="Home"
            {...a11yProps(0)}
          />
          <Tab label="Article" {...a11yProps(1)} />
          <Tab label="Magzines" {...a11yProps(2)} />
          <Tab label="Daily Dua" {...a11yProps(3)} />
          <Tab label="Events" {...a11yProps(4)} />
          <Tab label="Tarbiyati Chanel" {...a11yProps(5)} />
          <Tab label="Publications" {...a11yProps(6)} />
          <Tab label="News" {...a11yProps(7)} />
          <Tab label="Photos" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <Home />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Articles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Magzines />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DailyDua />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Events />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Tarbiyatchannel />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Publications />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <News />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Photos />
      </TabPanel>
    </Box>
  );
}
