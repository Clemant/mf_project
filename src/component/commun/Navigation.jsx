const Navigation = () => {
  return (
    <div>
      <div className="logo">
        <h1 className="logo_name">CutMadeFolded </h1>
      </div>
      <nav className="bg-black shadow-xl" uk-navbar="true">
        <div className="uk-navbar-center">
          <ul className="flex justify-around w-full items-center m-0">
            <li className="">
              <a
                className="text-white text-3xl hover:text-white md:text-5xl"
                href="#home"
                uk-scroll="true"
              >
                Cartes
              </a>
            </li>
            <li className="">
              <a
                className=" text-white text-3xl hover:text-white md:text-5xl"
                href="#about"
                uk-scroll="true"
              >
                &Agrave; propos
              </a>
            </li>
            <li className="">
              <a
                className=" text-white text-3xl hover:text-white md:text-5xl"
                href="#contact"
                uk-scroll="true"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
