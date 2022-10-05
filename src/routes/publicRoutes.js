import Home from "../pages/Home/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/services", name: "Services", Component: Services },
    { path: "/login", name: "Login", Component: Login },
]