import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar>
        <Home />
        <About />
        <Login />
        <Services />
        <Contact />
      </Navbar >

    </>
  );
}

export default App;
