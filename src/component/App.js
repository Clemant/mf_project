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
    <p className="logo_name">CutMadeFolded</p>
    <nav className="uk-navbar-container" uk-navbar="true">

    <div className="uk-navbar-center">

        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link className="nav_space" to="home">Accueil</Link></li>
            <li className="uk-active"><Link className="nav_space" to="about">&Agrave; propos</Link></li>
            <li className="uk-active"> <Link className="nav_space" to="contact">Contact</Link></li>
        </ul>
    </div>
    </nav>

    
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
