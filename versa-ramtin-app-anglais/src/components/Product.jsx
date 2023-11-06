import { useEffect, useRef, useState } from 'react';
import './Product.scss'; // Assurez-vous d'avoir le fichier de styles CSS importé
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Product({ normalization }) {
  const [curPage, setCurPage] = useState(1);
  const [fixed, setFixed] = useState(false);
  const [scrollTimer, setScrollTimer] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const numOfPages = 3; // Nombre total de pages
  const pgPrefix = 'skw-page-';
  // const [scrollCount, setScrollCount] = useState(0);
  // const [scrollCount1, setScrollCount1] = useState(0);
  // const div1Ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

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
          start: 'top 300px',
          end: 'bottom 300px',
          onLeave: () => {
            gsap.to(elem, {
              opacity: 0,
              x: -200,
              duration: 0.6,
              ease: 'power1.inOut',
            });
          },
          onEnterBack: () => {
            gsap.to(elem, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power1.inOut',
            });
          },
        },
      },
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
          start: 'top 300',
          end: 'bottom 300',
          onLeave: () => {
            gsap.to(elem, {
              opacity: 0,
              x: 200,
              duration: 0.6,
              ease: 'power1.inOut',
            });
          },
          onEnterBack: () => {
            gsap.to(elem, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power1.inOut',
            });
          },
        },
      },
    );
  };
  useEffect(() => {
    slideInLeft('#left');
    slideInRight('#right');
  }, []);

  // const slideOutLeft = (elem, delay, duration) => {
  //   gsap.to(elem, {
  //     opacity: 0,
  //     x: -200,
  //     delay: delay || 0.1,
  //     duration: duration || 0.6,
  //     onComplete: () => {
  //       gsap.set(elem, { x: 0 });
  //     },
  //     scrollTrigger: {
  //       trigger: elem,
  //       start: "top center",
  //       end: "bottom center",
  //     },
  //   });
  // };

  // const slideOutRight = (elem, delay, duration) => {
  //   gsap.to(elem, {
  //     opacity: 0,
  //     x: 200,
  //     delay: delay || 0.1, // Ajoutez un délai ici pour retarder la sortie
  //     duration: duration || 0.6,
  //     onComplete: () => {
  //       gsap.set(elem, { x: 0 });
  //     },
  //     scrollTrigger: {
  //       trigger: elem,
  //       start: "top center",
  //       end: "bottom center",
  //     },
  //   });
  // };

  const handleScroll = e => {
    // Empêcher le défilement de la page complète
    // e.preventDefault();

    // Calculer la direction du défilement
    const delta = e.deltaY;
    // Incrémenter le compteur de scrolls
    // if (delta > 0) {
    //   setScrollCount(scrollCount + 1);
    //   setScrollCount1(scrollCount1 + 1);
    //   if (scrollCount >= 4) {
    //     // slideOutLeft(`#left`, 1, 1); // Animation de sortie de la gauche
    //     setScrollCount(0);
    //   }

    //   if (scrollCount1 > 4) {
    //     // slideOutRight(`#right`, 1, 1);
    //     setScrollCount1(0);
    //   }
    // }

    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    // Changer de page en fonction de la direction du défilement
    // if (delta > 0 && curPage < numOfPages && scrollCount >= 3) {
    //   setCurPage(curPage + 1);
    // } else if (delta < 0 && curPage > 1 && scrollCount >= 3) {
    //   setCurPage(curPage - 1);
    // }
    // Définir un nouveau délai pour le changement de page
    const newScrollTimer = setTimeout(() => {
      if (delta > 0 && curPage < numOfPages) {
        setCurPage(curPage + 1);
      } else if (delta < 0 && curPage > 1) {
        setCurPage(curPage - 1);
      }
    }, 500); // Délai de 500 millisecondes

    setScrollTimer(newScrollTimer);
  };

  // Restaurer le délai lorsque curPage change
  useEffect(() => {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
  }, [curPage]);

  useEffect(() => {
    const fixededScroll = () => {
      // normalization > 0.601 ? setFixed(true) : setFixed(false);
      normalization > 0.601 && normalization < 0.933
        ? setFixed(true)
        : setFixed(false);
    };

    window.addEventListener('scroll', fixededScroll);

    return () => {
      window.removeEventListener('scroll', fixededScroll);
    };
  }, [normalization]);

  const nameProducts = [
    {
      title: 'Tomato Paste',
      description:
        'Tomato paste is a thick paste made from tomatoes, which are cooked for several hours to reduce water content, straining out seeds and skins, and cooking the liquid again to reduce the base to a thick, rich concentrate.[1] It is used to impart an intense tomato flavour to a variety of dishes, such as pasta, soups and braised meat. It is used as an ingredient in many world cuisines.',
    },
    {
      title: 'Pickle',
      description:
        'A pickled cucumber – commonly known as a pickle in the United States and Canada and a gherkin (/ɡərkɪn/) in Britain, Ireland, South Africa, Australia, and New Zealand – is a usually small or miniature cucumber that has been pickled in a brine, vinegar, or other solution and left to ferment. The fermentation process is executed either by immersing the cucumbers in an acidic solution or through souring by lacto-fermentation. Pickled cucumbers are often part of mixed pickles.',
    },
    {
      title: 'Rice',
      description:
        'Rice is the seed of the grass species Oryza sativa (Asian rice) or, less commonly, O. glaberrima (African rice). The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated, although the term may also be used for primitive or uncultivated varieties of Oryza.',
    },
  ];

  return (
    <>
      {isSmallScreen ? (
        <div
          className={`skw-pages`}
          // onWheel={handleScroll}
        >
          <div className="skw-page skw-page-1 active">
            <div className="skw-page__half skw-page__half--left">
              <div id="left" className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div id="right" className="skw-page__skewed">
                <div className="skw-page__content">
                  <h2 className="skw-page__heading">{nameProducts[0].title}</h2>
                  <p className="skw-page__description">
                    {nameProducts[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skw-page skw-page-2 active">
            <div className="skw-page__half skw-page__half--left">
              <div id="left" className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div id="right" className="skw-page__skewed">
                <div className="skw-page__content">
                  <h2 className="skw-page__heading">{nameProducts[1].title}</h2>
                  <p className="skw-page__description">
                    {nameProducts[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skw-page skw-page-3 active">
            <div className="skw-page__half skw-page__half--left">
              <div id="left" className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div id="right" className="skw-page__skewed">
                <div className="skw-page__content">
                  <h2 className="skw-page__heading">{nameProducts[2].title}</h2>
                  <p className="skw-page__description">
                    {nameProducts[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`skw-pages  ${fixed ? 'fixed-product' : ''}`}
          onWheel={handleScroll}
        >
          {nameProducts.map((product, index) => (
            <div
              className={`skw-page ${pgPrefix}${index + 1} ${
                curPage === index + 1 ? 'active' : ''
              }`}
              key={index + 1}
            >
              <div className="skw-page__half skw-page__half--left">
                <div id="left" className="skw-page__skewed">
                  <div className="skw-page__content"></div>
                </div>
              </div>

              <div className="skw-page__half skw-page__half--right">
                <div id="right" className="skw-page__skewed">
                  <div className="skw-page__content">
                    <h2 className="skw-page__heading">{product.title}</h2>
                    <p className="skw-page__description">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
  // return (
  //   <div
  //     className={`skw-pages ${fixed ? "fixed-product" : ""}`}
  //     // className={`skw-pages `}
  //     onWheel={handleScroll}
  //   >
  //     {Array.from({ length: numOfPages }, (_, index) => {
  //       const pageClass = curPage === index + 1 ? "active" : "";
  //       const title = nameProducts[index].title; // Obtenez le titre correspondant à l'index de la slide
  //       const description = nameProducts[index].description; // Obtenez le titre correspondant à l'index de la slide
  //       return (
  //         <div
  //           className={`skw-page ${pgPrefix}${index + 1} ${pageClass}`}
  //           key={index + 1}
  //         >
  //           {/* Contenu de la page */}
  //           <div className="skw-page__half skw-page__half--left">
  //             <div id="left" className="skw-page__skewed">
  //               <div className="skw-page__content"></div>
  //             </div>
  //           </div>

  //           <div className="skw-page__half skw-page__half--right">
  //             <div id="right" className="skw-page__skewed">
  //               <div key={index} className="skw-page__content">
  //                 <h2 className="skw-page__heading">
  //                   {title}
  //                   {/* {index + 1} */}
  //                 </h2>
  //                 <p className="skw-page__description">{description}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
