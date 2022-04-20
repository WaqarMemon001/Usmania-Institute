import * as React from "react";
import { makeStyles } from "@mui/styles";

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Container from '@mui/material/Container'
import MenuDrawer from './components/drawer/drawer';
import Errorpage from "./errorPage/Erorpage";
import Articles from './pages/Articles';
import Home from './pages/Home'
import Appbar from './components/layout/appbar/Appbar';
import News from './pages/News';
import Courses from "./pages/Courses";
import Article_01 from "./components/Articles/Article_01";

// importing components
import Footer from "./components/layout/footer/footer"
import Carousel from "./components/Carousel/Carousel";
import Publications from "./pages/Publications";




const App = () => {
  const classes = useStyles();
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Articles/Article" element={<Article_01/>} />
        <Route path="/News" element={<News />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <div className={classes.footer}>
        <Footer />
      </div> 
    </>
  );
}  


const useStyles = makeStyles({
  mainView: {
    marginTop: 50
  }
});

export default App;
