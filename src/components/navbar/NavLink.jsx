import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";

export const NavLink = ({ icon, name, link, ...res }) => {
  return (
    <div className="flex px-5 items-center" {...res}>
      <img src={icon} width={25} height={25} />
      <Link to={link} className="px-2">
        {name}
      </Link>
    </div>
  );
};
