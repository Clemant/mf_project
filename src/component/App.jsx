import "../css/style.scss";
import About from "./main_component/About";
import Contact from "./main_component/Contact";
import Home from "./main_component/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [ping, setPing] = useState(0);
  const [data, setData] = useState([]);
  const [network, setNetwork] = useState(window.navigator.onLine);

  useEffect(() => {
    console.log("useEffect", new Date(), data);
    console.log("Console.log", process.env.REACT_APP_API_URL);
    axios
      .get(process.env.REACT_APP_API_URL, {
        responseType: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        const getData = response.data.data[0];
        console.log(getData);
        setData(getData);
      })
      .catch((error) => {
        console.error("useEffect: ", error);
      })
      .finally((final) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading === true ? (
        <div className="uk-flex uk-flex-center uk-flex-baseline uk-margin-large-top ">
          <p className="uk-heading-small">Chargement {console.log(network)}</p>
          <span uk-spinner="ratio: 2"></span>
        </div>
      ) : data.length === 0 ? (
        <div className="text">
          <p className="uk-flex uk-flex-center uk-margin-large uk-heading-small">
            {" "}
            Le site est en maintenance...
          </p>
        </div>
      ) : (
        <div>
          <div className="logo">
            <h1 className="logo_name">CutMadeFolded {console.log(network)}</h1>
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
            <Home data={data.dataHome} />
          </div>
          <div id="about">
            <About data={data.dataAbout} />
          </div>

          <div id="contact">
            <Contact data={data.socialNetwork} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
