import { Link } from "react-router-dom";
import logo from "../../assets/Vector.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" />
        <span>
          <Link to="#about" className="capitalize font-bold text-xl">
            double P
          </Link>
        </span>
      </div>
      <div className="flex items-center gap-14">
        <ul className="flex items-center justify-center gap-14 capitalize">
          <li className="text-xl font-normal">
            <Link to="#about">Home</Link>
          </li>
          <li className="text-xl font-normal">
            <Link to="#services">services</Link>
          </li>
          <li className="text-xl font-normal">
            <Link to="#contact">contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-center text-xl font-normal hover:text-black hover:bg-white border border-black px-6 py-2 rounded-[14px] bg-secondary-black text-white transition-all"
          >
            login
          </Link>
          <Link
            to="/login"
            className="text-center text-xl font-normal text-black border border-black px-6 py-2 rounded-[14px] hover:bg-secondary-black hover:text-white transition-all"
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
