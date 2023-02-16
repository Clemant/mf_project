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

    window.addEventListener("online", () => {
      setNetwork(window.navigator.onLine);
      console.log(window.navigator.onLine);
    });

    if (data.length === 0 && ping < 1) {
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
          setData(getData);
        })
        .catch((error) => {
          console.error("useEffect: ", error);
        })
        .finally((final) => {
          setLoading(false);
        });
    } else if (
      (data.length > 0 && ping < 1) ||
      (data.length === 0 && ping > 1)
    ) {
      setLoading(false);
    }
    setPing(ping + 1);
  }, []);
  return (
    <div>
      {loading === true && (ping > 1 || ping < 1) ? (
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
            <p className="logo_name">CutMadeFolded {console.log(network)}</p>
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
