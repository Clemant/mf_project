import React, { Suspense, useState } from "react";
import Loading from "../commun/Loading";

const Home = ({ data }) => {
  const [defaultData, setDefaultData] = useState(
    data.filter((x) => x.title == "Lorem ipsum dolor sit amet")
  );

  const value = (title) => {
    let test = data.filter((x) => x.title == title);
    setDefaultData(test);
  };

  return (
    <div className="p-2.5 md:p-10 mt-10">
      {/** Attention */}
      <h2 className="font-extrabold text-black text-4xl p-x-10 p-y-1">
        Cartes
      </h2>
      <figure className="">
        {" "}
        <blockquote className="mb-1">
          <p className="font-thin text-base mb-0 pb-0">
            "Une carte created by
            <strong className="font-bold"> Cut Made & Folded</strong> vaut mille
            mots. Il ne manque plus qu'a chosir parmi cette sélection."
          </p>
        </blockquote>
        <figcaption>
          <cite className="m-y-0 p-y-0 not-italic text-sm">
            {" "}
            L'équipe de Cut Made & Folded
          </cite>
        </figcaption>{" "}
      </figure>
      <div className="mt-10">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {data.map((element, index) => {
            console.log(element);
            return (
              <button
                key={index}
                type="button"
                className="text-white hover:text-black border border-black bg-black hover:bg-white focus:bg-white focus:text-black rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 "
              >
                {element.title}
              </button>
            );
          })}
        </div>
        {/** */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <figure>
                <Suspense fallback={<Loading />}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt=""
                  />
                </Suspense>
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #1
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #5
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #9
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <figure>
                <Suspense fallback={<Loading />}>
                  {" "}
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt=""
                  />
                </Suspense>
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #2
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #6
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #10
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />{" "}
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #3
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #7
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #11
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #4
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #8
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
                <figcaption className="bg-black text-white p-2.5">
                  Cartes #12
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/** */}
      </div>
    </div>
  );
};

export default Home;
