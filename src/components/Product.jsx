import { useEffect, useRef, useState } from "react";
import "./Product.scss"; // Assurez-vous d'avoir le fichier de styles CSS importé
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SkewedPages({ normalization }) {
  const [curPage, setCurPage] = useState(1);
  const [fixed, setFixed] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [scrollCount1, setScrollCount1] = useState(0);
  const numOfPages = 3; // Nombre total de pages
  const pgPrefix = "skw-page-";
  const div1Ref = useRef(null);
  console.log("normalization product: 0.35228495938937277", normalization);
  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top 300px",
          end: "bottom 300px",
        },
      }
    );
  };

  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top 300",
          end: "bottom 300",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeft("#left");
    slideInRight("#right");
  }, []);
  const slideOutLeft = (elem, delay, duration) => {
    gsap.to(elem, {
      opacity: 0,
      x: -200,
      delay: delay || 0.1,
      duration: duration || 0.6,
      onComplete: () => {
        gsap.set(elem, { x: 0 });
      },
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",
      },
    });
  };

  const slideOutRight = (elem, delay, duration) => {
    gsap.to(elem, {
      opacity: 0,
      x: 200,
      delay: delay || 0.1, // Ajoutez un délai ici pour retarder la sortie
      duration: duration || 0.6,
      onComplete: () => {
        gsap.set(elem, { x: 0 });
      },
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",
      },
    });
  };

  const handleScroll = (e) => {
    // Empêcher le défilement de la page complète
    e.preventDefault();

    // Calculer la direction du défilement
    const delta = e.deltaY;
    // Incrémenter le compteur de scrolls
    if (delta > 0) {
      setScrollCount(scrollCount + 1);
      setScrollCount1(scrollCount1 + 1);
      if (scrollCount >= 4) {
        // slideOutLeft(`#left`, 1, 1); // Animation de sortie de la gauche
        setScrollCount(0);
      }

      if (scrollCount1 > 4) {
        // slideOutRight(`#right`, 1, 1);
        setScrollCount1(0);
      }
    }

    // Changer de page en fonction de la direction du défilement
    if (delta > 0 && curPage < numOfPages && scrollCount >= 3) {
      setCurPage(curPage + 1);
    } else if (delta < 0 && curPage > 1 && scrollCount >= 3) {
      setCurPage(curPage - 1);
    }
  };

  useEffect(() => {
    const fixededScroll = () => {
      normalization > 0.601 ? setFixed(true) : setFixed(false);
    };

    window.addEventListener("scroll", fixededScroll);

    return () => {
      window.removeEventListener("scroll", fixededScroll);
    };
  }, [normalization]);

  const nameProducts = [
    {
      title: "Tomato Paste",
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux",
    },
    {
      title: "Pickle",
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux",
    },
    {
      title: "Rice",
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux",
    },
  ];

  return (
    <div
      className={`skw-pages ${fixed ? "fixed-product" : ""}`}
      // className={`skw-pages `}
      onWheel={handleScroll}
    >
      {Array.from({ length: numOfPages }, (_, index) => {
        const pageClass = curPage === index + 1 ? "active" : "";
        const title = nameProducts[index].title; // Obtenez le titre correspondant à l'index de la slide
        const description = nameProducts[index].description; // Obtenez le titre correspondant à l'index de la slide
        return (
          <div
            className={`skw-page ${pgPrefix}${index + 1} ${pageClass}`}
            key={index + 1}
          >
            {/* Contenu de la page */}
            <div className="skw-page__half skw-page__half--left">
              <div id="left" className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div id="right" className="skw-page__skewed">
                <div key={index} className="skw-page__content">
                  <h2 className="skw-page__heading">
                    {title}
                    {/* {index + 1} */}
                  </h2>
                  <p className="skw-page__description">{description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
