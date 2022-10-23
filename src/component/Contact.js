import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, setError, reset } = useForm();

  const form = useRef();
  const onSubmit = async (data) => {
    //console.log(data);
    // console.log(form, " ", form.current);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_KEY_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Votre email à été envoyé avec succès.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          reset((formValues) => ({
            ...formValues,
            lastName: "",
          }));
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="">
        <p className="section"> Contact</p>
      </div>
      <div className="section_contact">
        {" "}
        <div>
          <iframe
            width="700"
            height="480"
            frameborder="0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61386.58634408345!2d-61.26625254651065!3d15.9267873863436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1666523392742!5m2!1sen!2sfr"
            scrolling="no"
            loading="lazy"
          ></iframe>
        </div>
        <div className="section_contact_information">
          <p className="title">Informations:</p>
          <span className="sentence">
            E-mail:{" "}
            <a href="mailto:mfelie.capou@gmail.com ">mfelie.capou@gmail.com </a>
          </span>
          <p className="mark">
            * Pour toutes demandes, informations compl&eacute;mentaires,
            veuillez remplir le formulaire ci-dessous. Merci
          </p>
          <div>
            <form
              ref={form}
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
                  {...setError("lastName", {
                    type: "custom",
                    message: "custom message",
                  })}
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
                  {...register("user_email", { required: true })}
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
      <div className="footer">
        <p>Suivez nous sur nos différents reseaux sociaux</p>
        <div className="socialNetwork">
          <span uk-icon="icon:instagram; ratio:1.5"></span>
        </div>
        <p>
          Made by love by <a href="">FlamboyanTech</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
