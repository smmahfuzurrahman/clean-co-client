import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import {publicRoute} from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) =>
              <Route key={index} path={path} element={<Component />} />
              
              )
          }
        </Routes>
      </Navbar >

    </>
  );
}

export default App;
