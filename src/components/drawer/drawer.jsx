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
    marginTop: 100,
  },
  drawerList: {
    marginTop: 10,
    width: 280,
  },
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
        className={classes.drawer}
      >
        <div className={classes.drawerList}>
          <Box textAlign="center" p={2}>
          Usmania Academy Of Islamic Studies
          </Box>
          <Divider />
          <List onClick={() => setOpendrawer(false)}>
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
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MenuDrawer;
