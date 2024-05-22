import "./App.css";
import NavBar from "./Nav/Nav.jsx";
import About from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
//import Contact from "./Contact/contact.jsx";
//import Project from "./Project/Project.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      {/* <Contact />
      <Project /> */}
      <Footer />
    </>
  );
}

export default App;
