import React from "react";
import Title from "../commun/Title";

const About = ({ data }) => {
  return (
    <div className="about_container">
      {console.log("about", data)}

      <Title title={"À propos"} message={"Apprenez à nous connaitres"}></Title>
      {data.map((element, index) => {
        return (
          <div key={index}>
            {index % 2 === 0 ? (
              <div className="about_pair">
                <div className="">
                  {/** <h4 className="about_title">{element.title}</h4> */}
                  <p className="text-justify"> {element.text}</p>
                </div>
                <div
                  className="uk-flex uk-flex-center"
                  uk-scrollspy="target: > figure; cls: uk-animation-fade; delay: 700"
                >
                  <figure>
                    <img
                      className="about_image"
                      src={element.img}
                      srcSet={`${element.img} 2x ${element.img} 4x ${element.img} 10x ${element.img} 50x`}
                      alt={index}
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            ) : (
              <div className="about_impair">
                <div
                  className=""
                  uk-scrollspy="target: > figure; cls: uk-animation-fade; delay: 500"
                >
                  <figure className="picture">
                    <img
                      src={element.img}
                      className="about_image"
                      alt={index}
                      loading="lazy"
                      width="640"
                      height="360"
                    />
                  </figure>
                </div>
                <div className="">
                  <h4 className="about_title">{element.title}</h4>
                  <p> {element.text}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
      {/* <div className="m-x-5 w-full  bg-black shadow-xl h-0.5"></div> */}
    </div>
  );
};

export default About;
