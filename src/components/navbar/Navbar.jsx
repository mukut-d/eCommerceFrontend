import React from "react";
import { images } from "../../constants/images";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

const navLinks = [
  { name: "Home", icon: images.home, link: "/" },
  { name: "About", icon: images.about, link: "/about" },
  { name: "Cart", icon: images.cart, link: "/cart" },
  { name: "Products", icon: images.products, link: "/products" },
  { name: "Login", icon: images.login, link: "/login" },
  { name: "Signup", icon: images.signup, link: "/signup" },
  { name: "Logout", icon: images.logout, link: "/" },
];

const Navbar = () => {
  return (
    <nav className="bg-red-100 flex p-4 items-center justify-between ">
      {/* Logo */}
      <Link to={"/"}>
        <img src={images.logo} width={100} height={100} />
      </Link>
      <div className="flex w-3/4 bg-blue-100 p-4" id="navbar">
        {navLinks?.map((nav, index) => (
          <NavLink
            key={index}
            icon={nav.icon}
            name={nav.name}
            link={nav.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
