import "../css/App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About.js"
import Contact from "./Contact.js"
import Home from "./Home.js"

function App() {
  return (
    <BrowserRouter>
     <Link to="home">Accueil</Link>
     <Link to="about">&Agrave; propos</Link>
     <Link to="contact">Contact</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
