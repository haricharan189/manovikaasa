import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Book from "@/components/sections/Book";

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <About />
      <Services />
      <Book />
      <Contact />
    </div>
  );
};

export default Home;