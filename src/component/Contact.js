import { Loader, LoaderOptions } from "google-maps";
import { useForm } from "react-hook-form";
const loader = new Loader("AIzaSyC8wg6hI13Ty8bSj5oGfzYFEdV2BNsunVs");

const coordonnésGPs = { lat: 15.891359, lng: -61.312273 };
loader.load().then(function (google) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: coordonnésGPs,
    zoom: 10.25,
  });
  const marker = new google.maps.Marker({
    map: map,
    position: coordonnésGPs,
  });
});

const onSubmit = (data) => {
  console.log(data);
  console.log(process.env.REACT_APP_TEST_VAR);
};
const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="">
      <div className="">
        <p className="section"> Contact</p>
      </div>
      <div className="section_contact">
        <div className="section_map" id="map"></div>
        <div className="section_contact_information">
          <p className="title">Informations:</p>
          <p className="sentence">Nom: CAPOU</p>
          <p className="sentence">Pr&eacute;nom: Marie-F&eacute;lie</p>
          <span className="sentence">
            E-mail: <a href="mailto:mfcapou@gmail.com">mfcapou@gmail.com </a>
          </span>
          <p className="mark">
            * Pour toutes demandes, informations compl&eacute;mentaires,
            veuillez remplir le formulaire ci-dessous. Merci
          </p>
          <div>
            <form
              className="section_contact_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="uk-inline field_form">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input
                  className="uk-input uk-width"
                  type="text"
                  placeholder="Nom"
                  {...register("lastName", { required: true })}
                />
              </div>
              <div className="uk-inline field_form">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input
                  className="uk-input uk-width"
                  type="text"
                  placeholder="Prenom"
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="uk-inline field_form">
                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                <input
                  className="uk-input uk-width"
                  type="text"
                  placeholder="Adresse mail"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="uk-inline field_form">
                <textarea
                  className="uk-textarea uk-width message_form"
                  rows="9"
                  placeholder="Message..."
                  {...register("message")}
                ></textarea>
              </div>
              <input
                className="uk-button uk-button-default  uk-width-1-4"
                value="Envoyer"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
