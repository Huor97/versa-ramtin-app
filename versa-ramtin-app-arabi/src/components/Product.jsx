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
      title: 'صلصلة طماطم',
      description:
        'الطماطم هو منتج مركز مصنوع من الطماطم، حيث يتم طهيها لساعات عدة لإزالة الماء، وتصفية البذور والقشور، ثم طهي السائل مرة أخرى للتقليل منه إلى تركيز سميك وغني. يُستخدم لإعطاء نكهة طماطم مكثفة في مجموعة متنوعة من الأطباق مثل الباستا والحساء ولحوم البازلاء. وهو يستخدم كمكون أساسي في مأكولات عديدة في مختلف المأكولات العالمية',
    },
    {
      title: 'مخلل',
      description:
        'الخيار المخلل - المعروف باسم المخلل في الولايات المتحدة وكندا والخيار المخلل (/ɡərkɪn/) في بريطانيا وأيرلندا وجنوب أفريقيا وأستراليا ونيوزيلندا - عادة ما يكون خيارًا صغيرًا أو مصغرًا تم مخلله في محلول ملحي أو خل أو أي محلول آخر ويترك ليتخمر. تتم عملية التخمير إما عن طريق غمر الخيار في محلول حمضي أو عن طريق التخمير اللبني. غالبًا ما يكون الخيار المخلل جزءًا من المخللات المختلطة',
    },
    {
      title: 'أرز',
      description:
        'الأرز هو بذور الأنواع العشبية Oryza sativa (الأرز الآسيوي) أو، بشكل أقل شيوعًا، O. glaberrima (الأرز الأفريقي). يستخدم اسم الأرز البري عادة للأنواع من جنس زيزانيا وبورتيريسيا، سواء البرية أو المستأنسة، على الرغم من أن المصطلح يمكن أن يستخدم أيضًا للأصناف البدائية أو غير المزروعة من أوريزا',
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
