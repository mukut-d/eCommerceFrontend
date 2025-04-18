import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

export const NavLink = ({ icon, name, link, className, ...res }) => {
  return (
    <div className={`flex px-5 items-center ${className}`} {...res}>
      <Link to={link} className=" flex items-center">
        <img src={icon} width={25} height={25} />
        <p className="px-2 ">{name}</p>
      </Link>
    </div>
  );
};
