import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import DiscountCard from "./components/DiscountCard";
import WorkingDaysCard from "./components/WorkingDaysCard";
import About from "./components/About";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
      <>
      <Navbar />

      <Hero />

      <DiscountCard />

      <WorkingDaysCard />

      <About />

      {/* Aside */}
      <Aside />

      {/* Footer */}
      <Footer />

      </>
  );
}

export default App;
