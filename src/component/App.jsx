import "../css/style.scss";
import About from "./main_component/About";
import Contact from "./main_component/Contact";
import Home from "./main_component/Home";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./commun/Loading";
import Navigation from "./commun/Navigation";
import Footer from "./commun/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [ping, setPing] = useState(0);
  const [data, setData] = useState([]);
  const [network, setNetwork] = useState(window.navigator.onLine);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL, {
        responseType: "json",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        const getData = response.data.data[0];
        //console.log(getData);
        setData(getData);
      })
      .catch((error) => {
        console.error("Error: We have an issues... ");
      })
      .finally((final) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading === true ? (
        <Suspense fallback={<Loading />}></Suspense>
      ) : data.length === 0 ? (
        <div className="text">
          <div className="logo">
            <h1 className="logo_name">CutMadeFolded </h1>
          </div>
          <div className="uk-flex uk-flex-center uk-margin-large ">
            <p className="uk-heading-small typewriter">
              {" "}
              Le site est en maintenance...
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Navigation></Navigation>
          <div id="home">
            <Home data={data.dataHome} />
          </div>
          <div id="about">
            <About data={data.dataAbout} />
          </div>

          <div id="contact">
            <Contact data={data.socialNetwork} />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
