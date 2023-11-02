import { useEffect, useState } from "react";

import "./App.css";
import Canva from "./components/Canva";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";
// import News from "./components/News";
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      setScrollPosition(position);
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // N'oubliez pas de supprimer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientValue = Math.min(scrollPosition / 10, 100); // Ajustez la division pour contrôler la vitesse du fondu

  const backgroundStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${gradientValue}%, rgba(0, 0, 0, 0) 100%)`,
    height: "2000px", // Ajustez la hauteur selon votre contenu
  };

  function normalizeValue(value, min, max) {
    if (value < min) {
      return 0;
    } else if (value > max) {
      return 1;
    } else {
      return (value - min) / (max - min);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const normalizedPercentage = normalizeValue(
        scrollPosition,
        0,
        documentHeight - windowHeight
      );

      setScrollY(normalizedPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scrolly ==>", scrollY);

  return (
    <div className="App" style={backgroundStyle}>
      <Canva normalization={scrollY} />
      <section className="section-aboutUs">
        <Nav normalization={scrollY} />

        <AboutUs normalization={scrollY} />
      </section>
      <section className="section-services">
        <Services normalization={scrollY} />
      </section>
      <section className="section-product">
        <Product normalization={scrollY} />
        {/* <Product1 normalization={scrollY} /> */}
      </section>
      <section className="section-products">
        <Products normalization={scrollY} />
      </section>
      <section className="section-contact">
        <Contact normalization={scrollY} />
      </section>
      {/* <section>
        <News normalization={scrollY} />
      </section> */}
    </div>
  );
}

export default App;
