import { Link } from "react-router-dom";
import AboutPic from "../../assets/Illustration.png";

const About = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="max-w-[600px] text-left flex flex-col gap-8">
        <h1 className="text-6xl leading-[80px] font-medium">
          Navigating the landscape for success
        </h1>
        <p className="text-xl font-normal">
          Our digital service helps businesses grow and succeed online through a
          range of services including PN, Palindrome, NPN and more are coming
          soon.
        </p>
        <Link
          to="/login"
          className="text-center w-fit text-xl font-normal hover:text-black hover:bg-white border border-black px-6 py-4 rounded-[14px] bg-secondary-black text-white transition-all"
        >
          Join for free
        </Link>
      </div>
      <div className="flex items-center justify-center h-full">
        <img src={AboutPic} alt="About" />
      </div>
    </div>
  );
};

export default About;
