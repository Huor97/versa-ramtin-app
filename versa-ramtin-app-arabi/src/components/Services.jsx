import './Services.css';
import FoodStuff from '../images/Attachments_WEBp_for-Services/Food-Stuff.webp';
import Detergents from '../images/Attachments_WEBp_for-Services/Detergents.webp';
import Disposable from '../images/Attachments_WEBp_for-Services/Disposable-Dishes.webp';
import Catering from '../images/Attachments_WEBp_for-Services/Catering.webp';
import Logistics from '../images/Attachments_WEBp_for-Services/Logistics.webp';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const images = [FoodStuff, Detergents, Disposable, Catering, Logistics];
const noms = [
  'المواد الغذائية',
  'المنظفات',
  'المواد الاستهلاكية',
  'توفير الوجبات الغذائية',
  'النقل',
];
const description = [
  'اكتشف عالمًا من المواد الغذائية استثنائية، حيث الثقة في مصادرنا والالتزام بالتميز هما جوهر كل منتج نقدمه.',
  'ثق بمنظفاتنا المصممة خصيصًا لتوفير تنظيف عميق وشامل، مع الاعتناء بملابسك والبيئة.',
  'اختيارنا من الأطباق والمنتجات القابلة للتصرف تقدم حلاً مريحًا وصديقًا للبيئة، مما يتيح لك الاستمتاع بكل وجبة بسهولة وراحة بالبال.',
  'اختيارنا من الأطباق والمنتجات القابلة للتصرف يقدم حلاً مريحًا وصديقًا للبيئة، مما يسمح لك بالاستمتاع بكل وجبة بسهولة وراحة بال.',
  'اختيارنا من الأطباق والمنتجات القابلة للتصرف يقدم حلاً مريحًا وصديقًا للبيئة، مما يتيح لك الاستمتاع بكل وجبة بسهولة وراحة بالبال.',
];
// eslint-disable-next-line react/prop-types
export default function Services({ normalization }) {
  const [vesible, setVesible] = useState(false);
  // const [visibled, setVisibled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);

  // size screen change
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // fixed container
  useEffect(() => {
    const vesibledScroll = () => {
      normalization > 0.474 ? setVesible(true) : setVesible(false);
      // normalization > 0.28 ? setVisibled(true) : setVisibled(false);
      // window.onclick ? setActived(true) : setActived(false);
    };
    window.addEventListener('scroll', vesibledScroll);
    window.addEventListener('click', vesibledScroll);
    return () => {
      window.removeEventListener('scroll', vesibledScroll);
      window.removeEventListener('click', vesibledScroll);
    };
  }, [normalization]);

  useEffect(() => {
    // =========================================== objet 1
    gsap.set(div1Ref.current, {
      x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div1Ref.current,
      start: 'top 500px',
      end: 'bottom 500px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div1Ref.current, {
          x: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div1Ref.current, {
          x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    // Initialiser un deuxième ScrollTrigger pour faire disparaître l'objet après un certain défilement supplémentaire
    ScrollTrigger.create({
      trigger: div1Ref.current,
      start: 'top 50px', // Définissez le point de départ pour la disparition de l'objet
      end: 'bottom 50px', // Définissez le point de fin pour la disparition de l'objet
      // markers: true,

      onEnter: () => {
        gsap.to(div1Ref.current, {
          x: '-100%',
          opacity: 0,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div1Ref.current, {
          x: '0',
          opacity: 1,
          ease: 'power1.inOut',
        });
      },
    });

    // ============================================ objet 2
    gsap.set(div5Ref.current, {
      x: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div5Ref.current,
      start: 'top 500px',
      end: 'bottom 500px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div5Ref.current, {
          x: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div5Ref.current, {
          x: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    // Initialiser un deuxième ScrollTrigger pour faire disparaître l'objet après un certain défilement supplémentaire
    ScrollTrigger.create({
      trigger: div5Ref.current,
      start: 'top 50px', // Définissez le point de départ pour la disparition de l'objet
      end: 'bottom 50px', // Définissez le point de fin pour la disparition de l'objet
      // markers: true,

      onEnter: () => {
        gsap.to(div5Ref.current, {
          x: '100%',
          opacity: 0,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div5Ref.current, {
          x: '0',
          opacity: 1,
          ease: 'power1.inOut',
        });
      },
    });

    // ============================================ objet 3
    gsap.set(div2Ref.current, {
      y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top 750px',
      end: 'bottom 750px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div2Ref.current, {
          y: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div2Ref.current, {
          y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    // Initialiser un deuxième ScrollTrigger pour faire disparaître l'objet après un certain défilement supplémentaire
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top 150px', // Définissez le point de départ pour la disparition de l'objet
      end: 'bottom 150px', // Définissez le point de fin pour la disparition de l'objet
      // markers: true,

      onEnter: () => {
        gsap.to(div2Ref.current, {
          y: '100%',
          opacity: 0,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div2Ref.current, {
          y: '0',
          opacity: 1,
          ease: 'power1.inOut',
        });
      },
    });

    // ============================================ objet 4
    gsap.set(div4Ref.current, {
      y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div4Ref.current,
      start: 'top 750px',
      end: 'bottom 750px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div4Ref.current, {
          y: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div4Ref.current, {
          y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    ScrollTrigger.create({
      trigger: div4Ref.current,
      start: 'top 150px', // Définissez le point de départ pour la disparition de l'objet
      end: 'bottom 150px', // Définissez le point de fin pour la disparition de l'objet
      // markers: true,

      onEnter: () => {
        gsap.to(div4Ref.current, {
          y: '100%',
          opacity: 0,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div4Ref.current, {
          y: '0',
          opacity: 1,
          ease: 'power1.inOut',
        });
      },
    });

    // ============================================ objet 5
    gsap.set(div3Ref.current, {
      y: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div3Ref.current,
      start: 'top -20px',
      end: 'bottom -20px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div3Ref.current, {
          y: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div3Ref.current, {
          y: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    ScrollTrigger.create({
      trigger: div3Ref.current,
      start: 'top -500px', // Définissez le point de départ pour la disparition de l'objet
      end: 'bottom -500px', // Définissez le point de fin pour la disparition de l'objet
      // markers: true,

      onEnter: () => {
        gsap.to(div3Ref.current, {
          y: '-100%',
          opacity: 0,
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div3Ref.current, {
          y: '0',
          opacity: 1,
          ease: 'power1.inOut',
        });
      },
    });
  }, []);

  return (
    <>
      {/* {images.map((image, index) => ( */}
      {isSmallScreen ? (
        <div className={`container`}>
          <div
            // ref={div1Ref}
            className={`card  date-description card-1`}
            style={{ '--img': `url(${images[0]})` }}
            data-description={description[0]}
          >
            <h2 className="date-text">{noms[0]}</h2>
          </div>

          <div
            // ref={div2Ref}
            className={`card  date-description card-2`}
            style={{ '--img': `url(${images[1]})` }}
            data-description={description[1]}
          >
            <h2 className="date-text">{noms[1]}</h2>
          </div>

          <div
            // ref={div3Ref}
            className={`card  date-description card-3`}
            style={{ '--img': `url(${images[2]})` }}
            data-description={description[2]}
          >
            <h2 className="date-text">{noms[2]}</h2>
          </div>

          <div
            // ref={div4Ref}
            className={`card  date-description card-4`}
            style={{ '--img': `url(${images[3]})` }}
            data-description={description[3]}
          >
            <h2 className="date-text">{noms[3]}</h2>
          </div>

          <div
            // ref={div5Ref}
            className={`card  date-description card-5`}
            style={{ '--img': `url(${images[4]})` }}
            data-description={description[4]}
          >
            <h2 className="date-text">{noms[4]}</h2>
          </div>
        </div>
      ) : (
        <div className={`container ${vesible ? 'fixed' : ''}`}>
          <div
            ref={div1Ref}
            className={`card  date-description card-1`}
            style={{ '--img': `url(${images[0]})` }}
            data-description={description[0]}
          >
            <h2 className="date-text">{noms[0]}</h2>
          </div>

          <div
            ref={div2Ref}
            className={`card  date-description card-2`}
            style={{ '--img': `url(${images[1]})` }}
            data-description={description[1]}
          >
            <h2 className="date-text">{noms[1]}</h2>
          </div>

          <div
            ref={div3Ref}
            className={`card  date-description card-3`}
            style={{ '--img': `url(${images[2]})` }}
            data-description={description[2]}
          >
            <h2 className="date-text">{noms[2]}</h2>
          </div>

          <div
            ref={div4Ref}
            className={`card  date-description card-4`}
            style={{ '--img': `url(${images[3]})` }}
            data-description={description[3]}
          >
            <h2 className="date-text">{noms[3]}</h2>
          </div>

          <div
            ref={div5Ref}
            className={`card  date-description card-5`}
            style={{ '--img': `url(${images[4]})` }}
            data-description={description[4]}
          >
            <h2 className="date-text">{noms[4]}</h2>
          </div>
        </div>
      )}
      {/* ))} */}
    </>
  );
}
