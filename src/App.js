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


function App() {
  return (
    <div >
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

    </div >
  );
}

export default App;
