import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "../components/Carousel/Carousel";


const useStyles = makeStyles({
  mainView: {
    marginTop: 65,
  },
  intro: {
    marginTop: 20,
    textAlign : 'left',
  },
});




function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainView}>
        <Carousel />
      </div>

      <Container className={classes.intro}>
        <h2>ادارہ کے بانی و مؤسس:</h2>
        <br />
        <h3>حضرت مولانا ڈاکٹر عبد الحى سندهى _مدظلہ العالي_</h3>
        <br />
        <h2>متخصص:</h2>
        <p> تفسير و علوم قرآنيه بين الأقوامي اسلامي يونيورستى اسلام آباد</p>
      </Container>    




    </>
  );
}

export default Home;
