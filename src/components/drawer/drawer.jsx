import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton, ListItemButton, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

// importing pages
import Home from "../../pages/Home";
import Articles from "../../pages/Articles";
import Magzines from "../../pages/Magzines";
import Tarbiyatchannel from "../../pages/Tarbiyatchannel";
import Publications from "../../pages/Publications";
import News from "../../pages/News";
import Events from "../../pages/Events";
import Photos from "../../pages/Photos";
import DailyDua from "../../pages/DailyDua";

// importing Icons
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArticleIcon from "@mui/icons-material/Article";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  menufooter: {
    width: "inherit",
  },
  Link: {
    textDecoration: "none",
    color: "white",
  },
  menuheader :{
    background: "linear-gradient(45deg, #1a1f1a 70%, #0e63ad 40%)",
    // background: "linear-gradient(45deg, #06ba00 70%, #46ff40  40%)",
    height : 'inherit'
  },
  menuitems:{
    color : 'white'
  }
}));

function MenuDrawer({ opendrawer, setOpendrawer }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={opendrawer}
        onClose={() => setOpendrawer(false)}
        onOpen={() => setOpendrawer(true)}
        className={classes.menufooter}
      >
        <div className={classes.menuheader}>
          <Box textAlign="center" className={classes.menuitems} p={2}>
            Usmania Academy Of Islamic Studies
          </Box>
          <Divider />
          <br />
          <List
            onClick={() => setOpendrawer(false)}
            className={classes.menuitems}
          >
            <Link to="/" className={classes.Link}>
              <ListItem button >
                <ListItemIcon>
                  <HomeIcon className={classes.menuitems} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/publication" className={classes.Link}>
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooksIcon  className={classes.menuitems}/>
                </ListItemIcon>
                <ListItemText primary={"Publications"} />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/Articles" className={classes.Link}>
              <ListItem button>
                <ListItemIcon>
                  <ArticleIcon  className={classes.menuitems}/>
                </ListItemIcon>
                <ListItemText primary={"Articles"} />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/DailyDua" className={classes.Link}>
              <ListItem button>
                <ListItemIcon>
                  <VolunteerActivismOutlinedIcon className={classes.menuitems} />
                </ListItemIcon>
                <ListItemText primary={"Daily Duas"} />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/Courses" className={classes.Link}>
              <ListItem button>
                <ListItemIcon>
                  <MenuBookIcon className={classes.menuitems} />
                </ListItemIcon>
                <ListItemText primary={"Courses"} />
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MenuDrawer;
