import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import MenuDrawer from "../../drawer/drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import Header from "../header/Header";

// importing icons

import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArticleIcon from "@mui/icons-material/Article";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { width } from "@mui/system";

const useStyles = makeStyles({
  logo: {
    fontFamily: "sans-serif",
  },
  mainAppBar: {
    // background: "linear-gradient(45deg, #06ba00 70%, #46ff40  40%)",
    background: "linear-gradient(45deg, #1a1f1a 70%, #0e63ad 40%)",

    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  menuIcon: {
    color: "white",
  },
  Link: {
    textDecoration: "none",
    color: "white",
  },
  navitems: {
    alignItems: "center",
  },
});

function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1060px)");
  const classes = useStyles();
  const [opendrawer, setOpendrawer] = useState(false);

  return (
    <AppBar className={classes.mainAppBar}>
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Typography variant="h6">
            Usmania Academy Of Islamic Studies
          </Typography>
        </Box>
        {matches ? (
          <Box display="flex" flexGrow={1}>
            <List sx={{ display: "flex", width: "100%",justifyContent: 'space-between' }}>
              <Link to="/" className={classes.Link}>
                <ListItem button className={classes.navitems}>
                  <ListItemText>
                    <Typography variant="h6" className={classes.navitem}>
                      Home
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/Pubication" className={classes.Link}>
                <ListItem button className={classes.navitems}>
                  <ListItemText>
                    <Typography variant="h6" className={classes.navitem}>
                      Publication
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/Articles" className={classes.Link}>
                <ListItem button className={classes.navitems}>
                  <ListItemText>
                    <Typography variant="h6" className={classes.navitem}>
                      Articles
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/Daily Dua" className={classes.Link}>
                <ListItem button className={classes.navitems}>
                  <ListItemText>
                    <Typography variant="h6" className={classes.navitem}>
                      Daily Dua
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/Courses" className={classes.Link}>
                <ListItem button className={classes.navitems}>
                  <ListItemText>
                    <Typography variant="h6" className={classes.navitem}>
                      Coures
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </List>
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              onClick={() => setOpendrawer(true)}
              className={classes.mainicon}
            >
              <MenuOutlinedIcon
                sx={{ fontSize: 30 }}
                className={classes.menuIcon}
              />
            </IconButton>
            <MenuDrawer opendrawer={opendrawer} setOpendrawer={setOpendrawer} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
