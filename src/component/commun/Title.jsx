import React from "react";

const Title = ({ title, message }) => {
  return (
    <div className="bg-black h-32 flex  justify-center flex-col items-center">
      <h2 className="font-bold text-4xl text-white m-0 p-0">{title}</h2>
      <p className="italic text-base text-white mb-0 p-0">{message}</p>
    </div>
  );
};

export default Title;
