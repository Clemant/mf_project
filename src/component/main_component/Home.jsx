import React from "react";

const Home = ({ data }) => {
  return (
    <div>
      {/** Attention */}

      {console.log("alldata:", data)}
      {data.map((element, index) => {
        return (
          <div key={index}>
            <div className="section_home_title">
              <h4 className="home_title">{element.title}</h4>
            </div>
            <div
              className="section_slide"
              uk-slider="autoplay:true; pause-on-hover:true"
            >
              <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabIndex="-1"
              >
                <ul className="uk-slider-items uk-child-width-1-3@s uk-grid section_base">
                  {element.list_images.map((e, i) => {
                    return (
                      <li key={i}>
                        <div className="section_slider">
                          <figure>
                            <img
                              src={e.img}
                              srcSet={`${e.img} 2x`}
                              uk-img="loading: eager"
                              alt={i}
                            />
                          </figure>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover previous"
                  href="#"
                  uk-slidenav-previous="true"
                  uk-slider-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover next"
                  href="#"
                  uk-slidenav-next="true"
                  uk-slider-item="next"
                ></a>
              </div>

              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
