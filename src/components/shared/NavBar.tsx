import { Link } from "react-router-dom";
import logo from "../../assets/Vector.png";
import logoWhite from "../../assets/logo-white.svg";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* responsive */}
        <div className="flex items-center space-x-4 lg:hidden">
          <img src={logo} alt="logo" />
          <span>
            <Link to="#about" className="capitalize font-bold text-xl">
              double P
            </Link>
          </span>
        </div>
        <Button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
        <div
          className={cn(
            "lg:flex items-center justify-between py-4 hidden w-full",
            isNavOpen ? "flex" : "hidden"
          )}
        >
          <div className=" items-center space-x-4 hidden lg:flex">
            <img src={logo} alt="logo" />
            <span>
              <Link to="#about" className="capitalize font-bold text-xl">
                double P
              </Link>
            </span>
          </div>
          <div className="lg:flex items-center gap-14 bg-secondary-black lg:bg-white flex-col lg:flex-row absolute lg:relative top-0 h-full lg:h-fit px-4 py-6 lg:py-0 lg:px-0 left-0 w-[80%] lg:w-fit">
            <div className="lg:hidden mb-10 flex items-center justify-between">
              <div className=" items-center space-x-4 flex ">
                <img src={logoWhite} alt="logo" />
                <span>
                  <Link
                    to="#about"
                    className="capitalize font-bold text-xl text-white"
                  >
                    double P
                  </Link>
                </span>
              </div>
              <Button
                size={"icon"}
                onClick={toggleNavbar}
                variant={"outline"}
                className=""
              >
                <IoClose className="text-black" />
              </Button>
            </div>
            <ul className="flex flex-col lg:flex-row text-white lg:text-black lg:items-center items-start justify-center lg:gap-14 gap-4 capitalize">
              <li className="text-xl font-normal">
                <a href="#about">Home</a>
              </li>
              <li className="text-xl font-normal">
                <a href="#services">services</a>
              </li>
              <li className="text-xl font-normal">
                <a href="#contact">contact</a>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row lg:items-center items-start gap-4 mt-10 lg:mt-0">
              <Link
                to="/login"
                className="text-center lg:text-xl text-base font-normal lg:hover:text-black lg:hover:bg-white border border-black px-6 py-2 rounded-[14px] lg:bg-secondary-black lg:text-white bg-white text-black transition-all"
              >
                login
              </Link>
              <Link
                to="/login"
                className="text-center lg:text-xl text-base font-normal lg:text-black border lg:border-black px-6 py-2 rounded-[14px] lg:hover:bg-secondary-black lg:hover:text-white bg-white text-black transition-all"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
