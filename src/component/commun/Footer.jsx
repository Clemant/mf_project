const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900 m-0 p-2.5">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0">
            <h2 className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Cut Made & Folded
            </h2>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-white">
                Mention Légale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Condition Générale D'utilisation
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-white">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-white font-extrabold"
          >
            <strong> Cut Made & Folded™</strong>
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
