import data from "../data/data_about";

const element = data;
const About = () => {
  return (
    <div className="about_container">
      <div>
        <p className="section"> &Agrave; propos</p>
      </div>
      <div>
        {element.map((element, index) => {
          return (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className="about_pair">
                  <div className="">
                    <p className="about_title">{element.title}</p>
                    <p> {element.text}</p>
                  </div>
                  <div
                    className=""
                    uk-scrollspy="target: > figure; cls: uk-animation-fade; delay: 700"
                  >
                    <figure className="picture">
                      <img
                        className="image"
                        src={element.img}
                        alt={index}
                        loading="lazy"
                        width="640"
                        height="360"
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
                        className="image"
                        alt={index}
                        loading="lazy"
                        width="640"
                        height="360"
                      />
                    </figure>
                  </div>
                  <div className="">
                    <p className="about_title">{element.title}</p>
                    <p> {element.text}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
