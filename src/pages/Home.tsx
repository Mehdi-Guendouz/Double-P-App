import About from "@/components/home/About";
import Footer from "@/components/home/Footer";
import Services from "@/components/home/Services";
import NavBar from "@/components/shared/NavBar";

const Home = () => {
  return (
    <div className="container mx-auto md:space-y-20 space-y-8 md:px-20 px-4">
      <NavBar />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
