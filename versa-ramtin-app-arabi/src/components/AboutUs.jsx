import { useEffect, useState } from 'react';
import Logo from '../images/Logo-Arabic.png';
import ScrollDown from '../images/Scrolldown only-arabic.png';
import Arrow from '../images/Arrow.png';
import About from '../images/About us-Arabic.png';
import Contacts from '../images/Contacts.png';

import './AboutUs.css';

// eslint-disable-next-line react/prop-types
export default function AboutUs({ normalization }) {
  const initialLeft = 40;
  const initialLeftSmallScreen = 30;
  // const initialLeftLargeScreen = 40;
  const [vesible, setVesible] = useState(false);
  const [fixedConstact, setFixedContact] = useState(false);
  const [fixedConstactSmallScrenn, setFixedConstactSmallScrenn] =
    useState(false);
  const [vesibleArrow, setVesibleArrow] = useState(false);
  const [fixedLogo, setFixedLogo] = useState(false);
  const [fixedLogoSmallScreen, setFixedLogoSmallScreen] = useState(false);
  const [currentLeft, setCurrentLeft] = useState(initialLeft);
  const [currentLeftSmallScreen, setCurrentLeftSmallScreen] = useState(
    initialLeftSmallScreen,
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  // const [currentLeft, setCurrentLeft] = useState(initialLeftSmallScreen);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setFixedLogo(true) : setFixedLogo(false);
      window.scrollY > 237
        ? setFixedLogoSmallScreen(true)
        : setFixedLogoSmallScreen(false);
      window.scrollY > 300 ? setVesibleArrow(true) : setVesibleArrow(false);
      normalization > 0.446 ? setFixedContact(true) : setFixedContact(false);
      normalization > 0.15
        ? setFixedConstactSmallScrenn(true)
        : setFixedConstactSmallScrenn(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [normalization]);
  console.log(normalization, 'aboutus');
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const initialLeft =
  //       window.innerWidth <= 768
  //         ? initialLeftSmallScreen
  //         : initialLeftLargeScreen;

  //     if (fixedLogo) {
  //       if (currentLeft > 4) {
  //         setCurrentLeft(prevLeft => prevLeft - 1);
  //       }
  //     } else if (currentLeft < initialLeft) {
  //       setCurrentLeft(prevLeft => Math.min(prevLeft + 1, initialLeft));
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [fixedLogo, currentLeft, initialLeftSmallScreen, initialLeftLargeScreen]);

  useEffect(() => {
    const handleScroll = () => {
      if (fixedLogo) {
        if (currentLeft > 4) {
          setCurrentLeft(prevLeft => prevLeft - 1);
        }
      } else if (currentLeft < initialLeft) {
        setCurrentLeft(prevLeft => Math.min(prevLeft + 1, initialLeft));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixedLogo, currentLeft, initialLeft]);

  useEffect(() => {
    const handleScroll = () => {
      if (fixedLogo) {
        if (currentLeftSmallScreen > 4) {
          setCurrentLeftSmallScreen(prevLeft => prevLeft - 1);
        }
      } else if (currentLeftSmallScreen < initialLeftSmallScreen) {
        setCurrentLeftSmallScreen(prevLeft =>
          Math.min(prevLeft + 1, initialLeftSmallScreen),
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixedLogo, currentLeftSmallScreen, initialLeftSmallScreen]);

  useEffect(() => {
    const vesibledScroll = () => {
      window.scrollY > 200 ? setVesible(true) : setVesible(false);
    };

    window.addEventListener('scroll', vesibledScroll);

    return () => {
      window.removeEventListener('scroll', vesibledScroll);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="container-aboutUs">
          <div className={`langue ${vesible && 'hedden-langue'}`}>
            <a href="https://versa-ramtin-app-english.vercel.app">
              <button className="langue-change">English</button>
            </a>
          </div>

          <div
            className={`${fixedLogoSmallScreen ? 'fixed-logo' : 'logo'} `}
            style={{
              left: `${currentLeftSmallScreen}vw`,
            }}
          >
            <img src={Logo} alt="logo de site" />
          </div>

          <div
            className={` ${
              vesibleArrow ? 'arrow-hidden' : 'container-scrolling'
            }`}
          >
            <div className={`container-arrow`}>
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="container-scrolldown">
              <img src={ScrollDown} alt="scroll down" />
            </div>
          </div>

          <div className="about-us">
            <div className="about-us-description">
              <img src={About} alt="about" />
            </div>
            <div
              className={`${
                fixedConstactSmallScrenn ? 'fixed-contact' : 'about-us-contact'
              }`}
            >
              <img src={Contacts} alt="contacts" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container-aboutUs">
          <div className={`langue ${vesible && 'hedden-langue'}`}>
            <a href="https://versa-ramtin-app-english.vercel.app">
              <button className="langue-change">
                {/*  */}
                English
              </button>
            </a>
          </div>

          <div
            className={`${fixedLogo ? 'fixed-logo' : 'logo'} `}
            style={{
              left: `${currentLeft}vw`,
            }}
          >
            <img src={Logo} alt="logo de site" />
          </div>

          {/* <h1 className={` ${fixedLogo ? "title-fixed-logo" : "title-aboutUs"}  `}>
          VERSAL LOGO
        </h1>
        <h2 className={` ${fixedLogo ? "subtitle-fixed-logo" : "subtitle"} `}>
          globallyexporting
        </h2> */}
          <div
            className={` ${
              vesibleArrow ? 'arrow-hidden' : 'container-scrolling'
            }`}
          >
            <div className={`container-arrow`}>
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="container-scrolldown">
              <img src={ScrollDown} alt="scroll down" />
            </div>
          </div>

          <div className="about-us">
            <div className="about-us-description">
              <img src={About} alt="about" />
              {/* <h2>About Us:</h2>
            <p>
              asperiores ea sunt aut vel perferendis repellendus porro unde quod
              nam, ab repudiandae. Voluptate suscipit fugiat consequuntur ut
              quibusdam veniam ad, rem tempore labore ipsam aperiam fugit
              deserunt, ex, vitae dicta illo. Eos debitis itaque quae doloribus
              possimus eum fugit repellat molestiae, nostrum minus. Ea consequatur
              rem quam nostrum, quis id sunt doloremque ratione quidem rerum
              voluptas tenetur at iure eius delectus illo nam veritatis sint
              beatae laboriosam natus ipsam deleniti mollitia. Ratione saepe
              aliquid facilis magnam labore rem maiores ex error incidunt
              aspernatur qui, aut nemo voluptatem ducimus ipsum! Molestiae vel
              cumque doloremque, architecto velit nihil libero voluptate adipisci
              inventore ex eum sapiente autem voluptatibus beatae neque nisi porro
            </p> */}
            </div>
            <div
              className={`${
                fixedConstact ? 'fixed-contact' : 'about-us-contact'
              }`}
            >
              <img src={Contacts} alt="contacts" />
              {/* <h2>contact US:</h2>
            <strong>contact@versa.qa</strong>
            <strong>(+974)777 90 663</strong> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
