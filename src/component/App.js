import "../css/style.scss";
import About from "./About.js";
import Contact from "./Contact.js";
import Home from "./Home.js";

function App() {
  return (
    <div>
      <div className="logo">
        <p className="logo_name">CutMadeFolded</p>
      </div>
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a className="nav_space" href="#home" uk-scroll="true">
                Accueil
              </a>
            </li>
            <li className="uk-active">
              <a className="nav_space" href="#about" uk-scroll="true">
                &Agrave; propos
              </a>
            </li>
            <li className="uk-active">
              {" "}
              <a className="nav_space" href="#contact" uk-scroll="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
