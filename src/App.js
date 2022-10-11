import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { privateRoute } from "./routes/privateRoutes";
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          { publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          <Route element={<PrivateRoute />}>
            { privateRoute.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
          </Route>
        </Routes>
      </Navbar >

    </>
  );
}

export default App;
