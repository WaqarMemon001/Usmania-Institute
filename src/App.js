import * as React from "react";
import { makeStyles } from "@mui/styles";

// import {
//   Routes,
//   Route,
//   Link,
// } from 'react-router-dom'
import Container from '@mui/material/Container'
import MenuDrawer from './components/drawer/drawer';
import Header from './components/layout/header/Header';
import Errorpage from "./errorPage/Erorpage";
import Articles from './pages/Articles';
import Home from './pages/Home'
import Appbar from './components/layout/appbar/Appbar';
import News from './pages/News';
// import Layout from './components/layout/layout';



// importing components
import Footer from "./components/layout/footer/footer"




const App = () => {
  const classes = useStyles();
  return (
    <div  className={classes.root}>
      <Appbar />
      <Container sx={{ marginTop: 10 }} >
        <Header />
      </Container>

      
      {/* <Layout /> */}   

      {/* <MenuDrawer /> */}


      {/*
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/News" element={<News />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      */}

      {/* <Appbar /> */}
      {/* <MenuDrawer/> */}
      {/* <Header /> */}
      -      {/* <Errorpage /> */}


      {/* Footer */}

      <Footer className={classes.footer} />
    </div >
  );
}


const useStyles = makeStyles({
  root: {
  //   background: "linear-gradient(45deg, #06ba00 70%, #46ff40  40%)",
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px",

  },
  footer: {
   
  }
});

export default App;
