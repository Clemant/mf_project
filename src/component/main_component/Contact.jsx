import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../commun/Loading";
import Title from "../commun/Title";

const Contact = ({ data }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm();
  const [disabledSunetworkbmitButton, setDisabledSunetworkbmitButton] =
    useState(false);

  const form = useRef();
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset((formValues) => ({
        ...formValues,
        lastName: "",
        firstName: "",
        user_email: "",
        message: "",
      }));
    }
  }, [reset]);
  const onSubmit = async (data) => {
    setDisabledSunetworkbmitButton(true);
    console.log(data);
    console.log(form);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_KEY_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Votre email à été envoyé avec succès.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.error(error.text);
          toast.error("Votre email n'a pas été envoyé.", {
            position: "top-right",
            autoClose: 4500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      )
      .finally(() => {
        setDisabledSunetworkbmitButton(false);
      });
  };
  return (
    <div className="p-2.5 md:p-10 mt-10">
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
      {/**
       * 
       * 
       * <div className="section">
        <p className="section_title"> Contact</p>
      </div>
       */}

      <h2 className="font-extrabold text-black text-4xl py-1">Contact</h2>

      <blockquote className="mb-10">
        <p className="font-thin text-base mb-0 pb-0">
          "Nous sommes là pour vous écouter et répondre à vos besoins"
        </p>
      </blockquote>

      {/** */}
      <div className="grid gap-4 xl:gap-6 mt-28 mb-10 grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
        {" "}
        <Suspense fallback={<Loading />}>
          <div className="w-full">
            <div className="mapouter">
              <div className="gmap_canvas md:w-fit-content">
                <iframe
                  height="535"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61386.58634408345!2d-61.26625254651065!3d15.9267873863436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1666523392742!5m2!1sen!2sfr"
                  scrolling="no"
                  loading="lazy"
                  className="w-full sm:w-full 2xl:w-5/6"
                  title="marie_galante"
                ></iframe>
              </div>
            </div>
          </div>
        </Suspense>
        <div className="xl:p-3">
          <p className="text-base font-semibold text-black m-0">
            Informations:
          </p>
          <p className="italic m-0">
            * Pour toutes demandes, informations compl&eacute;mentaires,
            veuillez remplir le formulaire ci-dessous. Merci.
          </p>
          <div>
            <form
              ref={form}
              className="contact_section_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="uk-inline field_form">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input
                  className="uk-input uk-width uk-margin-small"
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
                  className="uk-input uk-width uk-margin-small"
                  type="text"
                  placeholder="Prenom"
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="uk-inline field_form">
                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                <input
                  className="uk-input uk-width uk-margin-small"
                  type="text"
                  placeholder="Adresse mail"
                  {...register("user_email", { required: true })}
                />
              </div>
              <div className="uk-inline field_form uk-margin-small">
                <textarea
                  className="uk-textarea uk-width uk-margin-small message_form"
                  rows="9"
                  placeholder="Message..."
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <input
                className="uk-button uk-button-default  w-1/2 md:w-1/4"
                value="Envoyer"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      {/** */}

      {/*
      <div className="footer uk-margin-top">
        <hr></hr>
        <div>
          <p className="footer_sentence">
            Suivez nous sur nos différents reseaux sociaux
          </p>
        </div>
        <div className="socialNetwork">
          {data.map((element, index) => {
            return (
              <a
                key={index}
                href={element.url}
                uk-icon={`icon:${element.icon}; ratio:1.5`}
                uk-tooltip={`title: ${element.title};delay:300`}
              ></a>
            );
          })}
        </div>
        <div className="information">
          <a data-uk-toggle="target: #my-mention">Mention Légale</a>
          <a data-uk-toggle="target: #my-condition">
            Condition g&eacute;n&eacute;rale d'utilisation
          </a>
        </div>
        <div>
          <p className="footer_sentence uk-margin-large">
            Made by <a href="">FlamboyanTech</a>
          </p>
        </div>
      </div>

          */}

      {/** popup */}

      <div id="my-mention" className="uk-modal-container" data-uk-modal={true}>
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" data-uk-close></button>
          <p className="uk-modal-title legal_mention">Mention l&eacute;gale</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div
        id="my-condition"
        className="uk-modal-container"
        data-uk-modal={true}
      >
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" data-uk-close></button>
          <p className="uk-modal-title legal_mention">
            Condition g&eacute;n&eacute;rale d'utilisation
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/**tt */}
    </div>
  );
};

export default Contact;
