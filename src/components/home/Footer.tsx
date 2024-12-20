import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="bg-secondary-black rounded-t-45 py-10 px-10 space-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" />
          <span>
            <Link
              to="#about"
              className="capitalize font-bold text-xl text-white"
            >
              double P
            </Link>
          </span>
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-14 capitalize text-white">
            <li className="text-xl font-normal underline underline-offset-4">
              <Link to="#about">Home</Link>
            </li>
            <li className="text-xl font-normal underline underline-offset-4">
              <Link to="#services">services</Link>
            </li>
            <li className="text-xl font-normal underline underline-offset-4">
              <Link to="#contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            to={"/"}
            className="flex items-center justify-center bg-white rounded-full w-10 h-10"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-center bg-white rounded-full w-10 h-10"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-center bg-white rounded-full w-10 h-10"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="text-white flex flex-col gap-3">
        <h3 className="bg-primary-green text-black font-medium text-xl px-1 w-fit rounded-md">
          Contact us:
        </h3>
        <span className="text-base">Email: m_guendouz@gmail.dz</span>
        <span className="text-base">Phone: +213-783-008-683</span>
        <span className="text-base">Address: JIJEL, JIJEL, ALGERIA</span>
      </div>
      <div className="">
        <Separator />
        <p className="text-white text-base pt-5">
          © 2024 Double P. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
