import React from "react";
import { Link } from "react-router-dom";

const CardContact = ({ image, title, describe, path }) => {
  return (
    <div className="bg-white w-52 h-56 p-2 rounded-lg shadow-md shadow-indigo-500">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="text-[1rem] h-6 w-6 ml-2 mt-2 object-cover rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold p-2 flex justify-center items-center">
        {title}
      </h2>
      {path ? (
        <Link to={path} className="no-underline">
          <p className="text-start p-2 text-[0.85rem] flex items-center">
            {describe}
          </p>
        </Link>
      ) : (
        <p className="text-start p-2 text-[0.85rem] flex items-center">
          {describe}
        </p>
      )}
    </div>
  );
};

export default CardContact;
