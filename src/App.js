import AOS from 'aos';
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { privateRoute } from "./routes/privateRoutes";
import PrivateRoute from "./Authentication/PrivateRoute";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Addadmin from './pages/Dashboard/AddAdmin';
import AddService from './pages/Dashboard/AddService';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          {/* Public Route */}
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          {/* Private Route */}
          <Route element={<PrivateRoute />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* Admin Route */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='add-admin' element={<Addadmin />} />
              <Route path='add-service' element={<AddService />} />
            </Route>
          </Route>
        </Routes>
      </Navbar >

    </>
  );
}

export default App;
