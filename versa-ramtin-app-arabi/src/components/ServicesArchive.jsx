import { useEffect, useRef, useState } from 'react';
import './Services.css';
import FoodStuff from '../images/Attachments_WEBp_for-Services/Food-Stuff.webp';
import Detergents from '../images/Attachments_WEBp_for-Services/Detergents.webp';
import Disposable from '../images/Attachments_WEBp_for-Services/Disposable-Dishes.webp';
import Catering from '../images/Attachments_WEBp_for-Services/Catering.webp';
import Logistics from '../images/Attachments_WEBp_for-Services/Logistics.webp';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Services({ normalization }) {
  const [vesible, setVesible] = useState(false);
  const [visibled, setVisibled] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [jeux, setJeux] = useState([
    {
      image: FoodStuff,
      titre: 'Food Stuffs',
      description:
        'Discover a world of exceptional foodstuffs, where trust in sourcing and commitment to excellence are at the heart of every product we offer.',
      isActive: false,
    },
    {
      image: Detergents,
      titre: 'Detergents',
      description:
        'Trust in our specially formulated detergents to provide a deep, thorough clean, while being gentle on your clothes and the environment.',
      isActive: false,
    },
    {
      image: Disposable,
      titre: 'Disposable Dishes',
      description:
        'Our selection of disposable dishes and products offers a convenient and environmentally-conscious solution, allowing you to enjoy every meal with ease and peace of mind.',
      isActive: false,
    },
    {
      image: Catering,
      titre: 'Catering',
      description:
        'Trust us to turn your vision into reality with our personalized catering solutions, ensuring each dish reflects your unique taste and style.',
      isActive: false,
    },
    {
      image: Logistics,
      titre: 'Logistics',
      description:
        "From every corner of the globe to your doorstep, our logistics network ensures seamless and efficient delivery, connecting you with the world's markets.",
      isActive: false,
    },
  ]);

  useEffect(() => {
    const vesibledScroll = () => {
      normalization > 0.474 ? setVesible(true) : setVesible(false);
      normalization > 0.28 ? setVisibled(true) : setVisibled(false);
      normalization > 0.29 ? setStartAnimation(true) : setStartAnimation(false);
      // window.onclick ? setActived(true) : setActived(false);
    };
    window.addEventListener('scroll', vesibledScroll);
    window.addEventListener('click', vesibledScroll);
    return () => {
      window.removeEventListener('scroll', vesibledScroll);
      window.removeEventListener('click', vesibledScroll);
    };
  }, [normalization]);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);

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

    // ============================================ objet 3
    gsap.set(div2Ref.current, {
      y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top 400px',
      end: 'bottom 400px',
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

    // ============================================ objet 4
    gsap.set(div4Ref.current, {
      y: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div4Ref.current,
      start: 'top 400px',
      end: 'bottom 400px',
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

    // ============================================ objet 4
    gsap.set(div3Ref.current, {
      y: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div3Ref.current,
      start: 'top 300px',
      end: 'bottom 300px',
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
  }, []);

  // const handleItemClick = (index) => {
  //   const updatedJeux = jeux.map((jeu, i) => ({
  //     ...jeu,
  //     isActive: i === index && !jeu.isActive
  //   }));

  //   isActive: i === index && !jeux.isActive;
  //   setJeux(updatedJeux);
  // };
  const handleItemClick = index => {
    const updatedJeux = jeux.map((jeu, i) => ({
      ...jeu,
      isActive: i === index ? !jeu.isActive : false,
    }));

    setJeux(updatedJeux);
  };

  return (
    <section
      // className={`game-section ${vesible ? "fixed" : "container-services"}  ${
      //   visibled ? "visible" : " hedden"
      // }`}
      className={`game-section ${vesible ? 'fixed' : 'container-services'}  ${
        visibled ? 'visible' : ' hedden'
      }`}

      // className={`game-section `}
    >
      <div className="owl-carousel custom-carousel owl-theme">
        <div
          ref={div1Ref}
          id="box1"
          // className={`item ${isActive ? "active" : ""}`}
          className={`item ${jeux[0].isActive ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
          // className={`item`}
          style={{ backgroundImage: `url(${jeux[0].image})` }}
          // onClick={() => handleItemClick(jeux[0].index[0])}
          // onWheel={handleScroll}
        >
          <div className="item-desc">
            <h3>{jeux[0].titre}</h3>
            <p>{jeux[0].description}</p>
          </div>
        </div>

        <div
          ref={div2Ref}
          id="box2"
          // className={`item ${isActive ? "active" : ""}`}
          // className={`item`}
          className={`item ${jeux[1].isActive ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
          style={{ backgroundImage: `url(${jeux[1].image})` }}
          // onClick={() => handleItemClick(jeux[0].index[0])}
          // onWheel={handleScroll}
        >
          <div className="item-desc">
            <h3>{jeux[1].titre}</h3>
            <p>{jeux[1].description}</p>
          </div>
        </div>

        <div
          ref={div3Ref}
          id="box3"
          // className={`item ${isActive ? "active" : ""}`}
          // className={`item`}
          className={`item ${jeux[2].isActive ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
          style={{ backgroundImage: `url(${jeux[2].image})` }}
          // onClick={() => handleItemClick(jeux[0].index[0])}
          // onWheel={handleScroll}
        >
          <div className="item-desc">
            <h3>{jeux[2].titre}</h3>
            <p>{jeux[2].description}</p>
          </div>
        </div>

        <div
          id="box4"
          ref={div4Ref}
          // className={`item ${isActive ? "active" : ""}`}
          // className={`item`}
          className={`item ${jeux[3].isActive ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
          style={{ backgroundImage: `url(${jeux[3].image})` }}
          // onClick={() => handleItemClick(jeux[0].index[0])}
          // onWheel={handleScroll}
        >
          <div className="item-desc">
            <h3>{jeux[3].titre}</h3>
            <p>{jeux[3].description}</p>
          </div>
        </div>

        <div
          ref={div5Ref}
          id="box5"
          // className={`item ${isActive ? "active" : ""}`}
          // className={`item`}
          className={`item ${jeux[4].isActive ? 'active left-open' : ''}`}
          onClick={() => handleItemClick(4)}
          style={{ backgroundImage: `url(${jeux[4].image})` }}
          // onClick={() => handleItemClick(jeux[0].index[0])}
          // onWheel={handleScroll}
        >
          <div className="item-desc">
            <h3>{jeux[4].titre}</h3>
            <p>{jeux[4].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
