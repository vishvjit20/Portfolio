import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
