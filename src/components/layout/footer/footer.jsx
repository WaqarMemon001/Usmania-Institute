import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { colors } from "@mui/material";

const useStyles = makeStyles({
  maincontainer: {
    position: "revert",
    left: 0,
    bottom: 0,
    marginTop:50,
    width: "100%",
  },
  root: {
    background: "linear-gradient(45deg, #1a1f1a 70%, #0e63ad 40%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 160,

    padding: "0 30px ",
    paddingBottom: 30,
    textAlign: "center",
  },
  heading: {
    color: "whitesmoke",
  },
  footermarkup: {
    fontWeight: "normal",
    textAlign : 'center',
    color : 'black'
  },
  scndfooter:{
    background :  "linear-gradient(45deg, #818a94 70%, #0e63ad 40%)",
   
  }
});

// const Item = styled(Paper)(({ theme }) => ({
//   // ...theme.typography.body2,
//   padding: theme.spacing(1),
// }));

const Footer = () => {
  const Classes = useStyles();

  return (
    <div className={Classes.maincontainer}>
      <div className={Classes.root}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6}>
              <h2>Usmania Academy Of Islamic Studies</h2>
              <br />
              <p>
                <strong>Address </strong> <br />
                Lorem ipsum dolor sit <br />
                amet consectetur adipisicing
                <br />
              </p>
            </Grid>

            <Grid item xs={6}>
              <h2>Contact Us</h2>
              <br />
              <p>
                <strong>Dumy</strong> <br />
                Lorem ipsum dolor sit <br />
                amet consectetur adipisicing
                <br />
              </p>
            </Grid>

            {/* <Grid item xs={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591.5197624512462!2d67.86155251620445!3d26.428605845808967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394aed601b1f808f%3A0x2feb649de8a35265!2sJamia%20Fakhr_ul_Uloom%2C%20Shah%20Sadar%20Masjid!5e0!3m2!1sen!2s!4v1649113835306!5m2!1sen!2s"
                width="250"
                height="150"
                // style="border:0;"
                // allowfullscreen=""
                // loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                scrolling="yes"
              ></iframe>
            </Grid> */}
          </Grid>
        </Box>
       
      </div>
    <div  className={Classes.scndfooter}>
    <p className={Classes.footermarkup}> &#169; 2021-2022 Usmania Academy Of Islamic Studies. All Rights Reserved </p>
    </div>
           
      
    </div>
  );
};

export default Footer;
