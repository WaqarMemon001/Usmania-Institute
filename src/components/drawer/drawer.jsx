import * as React from "react";
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
import { IconButton, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  drawer: {
    // marginTop: 100,
  },
  drawerList: {
    // marginTop: 10,
    width: 280,
  },
  menuheader:{
    background:  "linear-gradient(45deg, #1a1f1a 70%, #0e63ad 40%)",
    
  },
  menuitems:{
  color: 'white'
  },
  // menufooter:{
   

  //   background: "linear-gradient()"
  // },
});

function MenuDrawer({ opendrawer, setOpendrawer }) {
  const classes = useStyles();

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
          <Box textAlign="center" className={classes.menuitems}  p={2}>
            Usmania Academy Of Islamic Studies
          </Box>
          <Divider />
          <List onClick={() => setOpendrawer(false)} className={classes.menuitems}  >
            <ListItem button>
              <ListItemText primary={"Home"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Publications"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Artilces"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Tarbiyati-Channel"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Daily Dua"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Courses"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"About US"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MenuDrawer;
