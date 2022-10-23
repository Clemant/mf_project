import data_home from "../data/data_home";

const ccardsTheme = [
  {
    id: 0,
    title: "Anniversaire",
    picture: [
      {
        id: 0,
        url_picture: "https://picsum.photos/300/300?random",
        alt: "anniv1",
      },
      {
        id: 1,
        url_picture: "https://picsum.photos/300/300",
        alt: "anniv2",
      },
      {
        id: 2,
        url_picture: "https://picsum.photos/300/300?grayscale",
        alt: "anniv2",
      },
      {
        id: 3,
        url_picture: "https://picsum.photos/300/300",
        alt: "anniv3",
      },
    ],
    message: "",
  },
  {
    id: 0,
    title: "Fêtes Religieuses",
    picture: [
      {
        id: 0,
        url_picture: "https://picsum.photos/700/300?random",
        alt: "FR1",
      },
      {
        id: 1,
        url_picture: "https://picsum.photos/700/500",
        alt: "FR2",
      },
      {
        id: 2,
        url_picture: "https://picsum.photos/700/300?grayscale",
        alt: "FR3",
      },
      {
        id: 3,
        url_picture: "https://picsum.photos/700/400",
        alt: "FR4",
      },
    ],
    message: "",
  },
  ,
  {
    id: 0,
    title: "Fêtes des Meres",
    picture: [
      {
        id: 0,
        url_picture: "https://picsum.photos/700/200",
        alt: "FM1",
      },
      {
        id: 1,
        url_picture: "https://picsum.photos/700/400?random",
        alt: "FM2",
      },
      {
        id: 2,
        url_picture: "https://picsum.photos/700/400?grayscale",
        alt: "FM3",
      },
    ],
    message: "",
  },
];

const Home = () => {
  return (
    <div>
      {/** Attention */}

      {console.log("data_home", data_home)}
      {ccardsTheme.map((element, index) => {
        return (
          <div key={index}>
            <div className="section_home_title">
              <p className="home_title">{element.title}</p>
            </div>
            <div
              className="section_slide"
              uk-slider="autoplay:true; pause-on-hover:true"
            >
              <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabIndex="-1"
              >
                <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
                  {element.picture.map((e, i) => {
                    return (
                      <li key={i}>
                        <img
                          className="default_img"
                          loading="lazy"
                          src="https://picsum.photos/700/400?grayscale"
                          width="500"
                          height="300"
                          uk-img="loading: eager"
                          alt={e.alt}
                        />
                      </li>
                    );
                  })}
                </ul>

                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slidenav-previous="true"
                  uk-slider-item="previous"
                ></a>
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover"
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
