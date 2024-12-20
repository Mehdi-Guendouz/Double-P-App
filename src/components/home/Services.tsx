import ServiceCard from "../Cards/ServiceCard";
import serviceOne from "@/assets/services/service1.png";
import serviceTwo from "@/assets/services/service2.png";
import serviceThree from "@/assets/services/service3.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col py-10 gap-10">
      <div className="flex items-center justify-start gap-10">
        <h3 className="bg-primary-green text-black font-medium text-5xl px-1">
          Services
        </h3>
        <p className="text-lg font-normal max-w-[600px] leading-6">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        <ServiceCard image={serviceOne} title="Search and find Palindrome" />
        <ServiceCard
          image={serviceTwo}
          title="Perfect Numbers"
          className="bg-primary-green"
          titleClassName="bg-white"
        />
        <ServiceCard
          image={serviceThree}
          title="Find the NPN"
          className="bg-secondary-black"
          titleClassName="bg-white"
        />
      </div>
      <div className="flex items-center justify-center py-4">
        <Link
          to="/login"
          className="text-center w-fit text-xl font-normal hover:text-black hover:bg-white border border-black px-14 py-4 rounded-[14px] bg-secondary-black text-white transition-all"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Services;
