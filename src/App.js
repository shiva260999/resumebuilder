import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Profile/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
