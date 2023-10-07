const Navigation = () => {
  return (
    <div>
      <div className="logo">
        <h1 className="logo_name">CutMadeFolded </h1>
      </div>
      <nav className="bg-black shadow-xl -mt-10" uk-navbar="true">
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className="">
              <a
                className="text-black text-5xl md:text-7xl"
                href="#home"
                uk-scroll="true"
              >
                Cartes
              </a>
            </li>
            <li className="">
              <a
                className="text-5xl md:text-7xl"
                href="#about"
                uk-scroll="true"
              >
                &Agrave; propos
              </a>
            </li>
            <li className="">
              <a
                className="text-5xl md:text-7xl"
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
