import { RegisterForm } from "@/components/Forms/registerForm";
import { Link } from "react-router-dom";
import logo from "@/assets/Vector.png";
import { Toaster } from "sonner";
const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  bg-white ">
      <Toaster position="bottom-right" richColors />
      <Link
        to={"/"}
        className="flex items-center space-x-4 absolute top-4 left-10"
      >
        <img src={logo} alt="logo" />
        <span>
          <Link to="#about" className="capitalize font-bold text-xl">
            double P
          </Link>
        </span>
      </Link>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
