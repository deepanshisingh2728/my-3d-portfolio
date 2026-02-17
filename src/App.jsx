import Navbar from "./section/Navbar";
import Hero from "./components/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Contact from "./section/Contact"; // ✅ import added
import Footer from "./section/Footer";


const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact /> 
        <Footer />
        
      </main>
    </div>
  );
};

export default App;
