import { useEffect, useRef, useState } from 'react';
import './Contact.scss'; // Assurez-vous de créer ce fichier de style pour les styles CSS.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import {
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'; // install free-brands-svg-icons

import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Form = ({ normalization }) => {
  const [visibled1, setVisibled1] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  // console.log('normal ==> contact:', normalization);

  // const slideInLeft = (elem, delay, duration) => {
  //   gsap.fromTo(
  //     elem,
  //     {
  //       opacity: 0,
  //       x: -400
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: delay || 0.1,
  //       duration: duration || 0.6,
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top center",
  //         end: "bottom center"
  //       }
  //     }
  //   );
  // };

  // const slideInRight = (elem, delay, duration) => {
  //   gsap.fromTo(
  //     elem,
  //     {
  //       opacity: 0,
  //       x: 400
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: delay || 0.1,
  //       duration: duration || 0.6,
  //       scrollTrigger: {
  //         trigger: elem,
  //         start: "top center",
  //         end: "bottom center"
  //       }
  //     }
  //   );
  // };

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickIcon = e => {
    e.stopPropagation(); // Empêche la propagation de l'événement au conteneur parent
    toggleForm();
  };

  const handleClickInsideForm = e => {
    e.stopPropagation();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // Logique de validation du formulaire ici
  //   // Réinitialiser le formulaire après la soumission
  //   setFormData({
  //     user_name: '',
  //     user_email: '',
  //     subject: '',
  //     message: '',
  //   });
  //   setIsExpanded(false);
  // };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0jl8vtj',
        'template_i6usyel',
        e.target,
        '6JDIAL65b8KfmPTuy',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  useEffect(() => {
    const vesibledScroll = () => {
      if (window.innerWidth <= 768) {
        // window.scrollY > 7500 ? setIsExpanded(true) : setIsExpanded(false);
        normalization >= 0.97 ? setVisibled1(true) : setVisibled1(false);
      } else {
        // window.scrollY > 7500 ? setIsExpanded(true) : setIsExpanded(false);
        normalization > 0.99 ? setVisibled1(true) : setVisibled1(false);
      }
    };

    window.addEventListener('scroll', vesibledScroll);

    return () => {
      window.removeEventListener('scroll', vesibledScroll);
    };
  }, [normalization]);

  // useEffect(() => {
  //   slideInLeft("#contacte-title");
  // }, []);
  useEffect(() => {
    // =========================================== objet 1
    gsap.set(div1Ref.current, {
      x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div1Ref.current,
      start: 'top 950px',
      end: 'bottom 950px',
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

    // =========================================== objet contact us
    gsap.set(div3Ref.current, {
      x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div3Ref.current,
      start: 'top 380px',
      end: 'bottom 380px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div3Ref.current, {
          x: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div3Ref.current, {
          x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche

          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top 950px',
      end: 'bottom 950px',
      scrub: 0.5,
      // markers: true,
      onEnter: () => {
        gsap.to(div2Ref.current, {
          x: '0', // Amenez l'élément à sa position d'origine (à l'intérieur de la fenêtre)
          opacity: 1, // Assurez-vous que l'élément est complètement visible
          ease: 'power1.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to(div2Ref.current, {
          x: '100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });

    // slideInRight("#form-container");
  }, []);

  return (
    // <div className={`contacte ${visibled1 ? "fixed-contacte" : "contacte"} `}>
    <div className={`contacte`}>
      <h1 className="contacte-us" ref={div3Ref}>
        Contact us
      </h1>
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fab fa-facebook" aria-hidden="true">
              <FontAwesomeIcon icon={faWhatsapp} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-LinkedinIn" aria-hidden="true">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-google-plus-g" aria-hidden="true">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li> */}
        {/* <li>
          <a href="#">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li> */}
      </ul>

      <div
        ref={div1Ref}
        id="form-container"
        className={`${isExpanded ? 'expand' : ''}`}
        onClick={toggleForm}
      >
        {!isExpanded && (
          <FontAwesomeIcon
            icon={faPencil}
            className="icon"
            onClick={handleClickIcon}
          />
        )}
        <div
          className={isExpanded ? 'expand' : ''}
          onClick={handleClickInsideForm}
        >
          {isExpanded && (
            <div id="form-head">
              <span
                id="form-close"
                className={`icon fa fa-close`}
                onClick={e => {
                  e.stopPropagation();
                  toggleForm();
                }}
              >
                X
              </span>
              <p>Good choice...</p>
            </div>
          )}

          <form onSubmit={sendEmail}>
            <input
              className="input name"
              type="text"
              name="user_name"
              placeholder="Your name please"
              // value={formData.user_name}
              // onChange={handleChange}
              // required
            />
            <input
              className="input email"
              type="email"
              name="user_email"
              placeholder="A contact email"
              // value={formData.user_email}
              // onChange={handleChange}
              // required
            />
            {/* <select
              className="input select"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            > */}
            {/* ... options ... */}
            {/* </select> */}
            <textarea
              className="input message"
              name="message"
              placeholder="How can I help ?"
              // value={formData.message}
              // onChange={handleChange}
              // required
            />
            <input
              className="input submit"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      {/* <div className="container-copyright">
        <span className={`copyright `}>©2023</span>
      </div> */}
      <span className={`copyright ${visibled1 ? 'fixed' : ''}`}>©2023</span>
    </div>
  );
};

export default Form;
