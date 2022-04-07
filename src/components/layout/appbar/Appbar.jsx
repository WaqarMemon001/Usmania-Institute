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
import Header from "../header/Header";

const useStyles = makeStyles({
  logo: {
    fontFamily: "sans-serif",
  },
  mainAppBar:{
    background: "linear-gradient(45deg, #06ba00 70%, #46ff40  40%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  menuIcon:{
    color : 'white',
  }
});

function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:810px)");
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
        {/* {matches ? (
          <IconButton  edge="end">
            <LanguageOutlinedIcon />
          </IconButton>
        ) : (
          <> */}
            <IconButton
          
              edge="end"
              onClick={() => setOpendrawer(true)}
            className={classes.mainicon}
            >
              <MenuOutlinedIcon      sx={{ fontSize : 30}} className={classes.menuIcon} />
            </IconButton>
            <MenuDrawer opendrawer={opendrawer} setOpendrawer={setOpendrawer} />
          {/* </>
        )} */}
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
