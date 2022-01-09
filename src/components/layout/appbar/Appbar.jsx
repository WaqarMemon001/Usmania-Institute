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
});

function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:810px)");
  const classes = useStyles();
  const [opendrawer, setOpendrawer] = useState(false);
  return (
    <AppBar color="default">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Typography variant="h6">
            Usmania Institute Of Islamic
          </Typography>
        </Box>
        {matches ? (
          <IconButton sx={{ marginRight: 3 }} edge="end" color="secondary">
            <LanguageOutlinedIcon />
          </IconButton>
        ) : (
          <>
            <IconButton
              sx={{ marginRight: 3 }}
              edge="end"
              color="secondary"
              onClick={() => setOpendrawer(true)}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <MenuDrawer opendrawer={opendrawer} setOpendrawer={setOpendrawer} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
