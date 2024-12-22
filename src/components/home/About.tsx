import { Link } from "react-router-dom";
import AboutPic from "../../assets/Illustration.png";

const About = () => {
  return (
    <div
      className="flex items-center justify-between gap-10  flex-col md:flex-row py-4"
      id="about"
    >
      <div className="max-w-[600px] text-left flex flex-col md:gap-8 gap-4">
        <h1 className="lg:text-6xl  text-4xl leading-[40px] lg:leading-[80px] font-medium">
          Navigating the landscape for success
        </h1>
        <p className="text-xl md:text-lg lg:text-xl font-normal">
          Our digital service helps businesses grow and succeed online through a
          range of services including PN, Palindrome, NPN and more are coming
          soon.
        </p>
        <Link
          to="/login"
          className="text-center w-fit md:text-xl text-base font-normal hover:text-black hover:bg-white border border-black px-6 lg:py-4 py-2 rounded-[14px] bg-secondary-black text-white transition-all"
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
