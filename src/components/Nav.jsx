import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav({ normalization }) {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const handleScrollTo = (scrollPosition) => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // pour un défilement fluide
    });
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    // Récupérez la hauteur totale de votre page
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Mettez à jour la valeur de scrollY entre 0 et 100
    let newScrollY = (window.scrollY / totalHeight) * 120;

    // Mettez à jour la valeur de scrollY avec la nouvelle valeur calculée
    setScrollY(newScrollY);
  };

  useEffect(() => {
    // Ajoutez un écouteur d'événements pour écouter les événements de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Le tableau vide [] assure que cet effet ne s'exécute qu'une fois après le rendu initial

  console.log("scroll ==> ", normalization);
  useEffect(() => {
    const scrollActive = () => {
      window.scrollY > 400 ? setActive(true) : setActive(false);

      if (normalization >= 0.9) {
        setActiveSection("news");
      } else if (normalization >= 0.75) {
        setActiveSection("contact");
      } else if (normalization >= 0.6) {
        setActiveSection("products");
      } else if (normalization >= 0.47) {
        setActiveSection("services");
      } else if (normalization >= 0.19) {
        setActiveSection("about");
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [normalization]);

  return (
    <div className="nav">
      <div className={`ligne ${active ? "" : "navbar-active"}`}></div>
      <div
        className={`about-gradient ${active ? "" : "navbar-active"}`}
        style={{ transform: `translateY(${scrollY}px)` }}
      ></div>

      <div className={`navbar ${active ? "" : "navbar-active"}`}>
        <ul>
          <li
            style={{ color: activeSection === "about" ? "#dfceba" : "#4f6073" }}
            onClick={() => handleScrollTo(2000)}
          >
            ABOUT US
          </li>
          <li
            style={{
              color: activeSection === "services" ? "#dfceba" : "#4f6073",
            }}
            onClick={() => handleScrollTo(2760)}
          >
            SERVICES
          </li>
          <li
            style={{
              color: activeSection === "products" ? "#dfceba" : "#4f6073",
            }}
            onClick={() => handleScrollTo(3550)}
          >
            PRODUCTS
          </li>
          <li
            style={{
              color: activeSection === "contact" ? "#dfceba" : "#4f6073",
            }}
            onClick={() => handleScrollTo(7430)}
          >
            CONTACT US
          </li>
          <li
            style={{
              color: activeSection === "news" ? "#dfceba" : "#4f6073",
            }}
            onClick={() => handleScrollTo(11000)}
          >
            NEWS
          </li>
        </ul>
      </div>
    </div>
  );
}
