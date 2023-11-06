import { useEffect, useRef, useState } from 'react';
import './Products.scss';
import Produc from './Produc';
import ProductsLongOnes from './ProductsLongOnes';

import Date1 from '../images/Attachments_WEBp_Other-Products/Date.webp';
import CoolIndustry from '../images/Attachments_WEBp_Other-Products/Cool_Industry.webp';
import Fish from '../images/Attachments_WEBp_Other-Products/Fish.webp';
import Walnuts from '../images/Attachments_WEBp_Other-Products/Walnuts.webp';
import Tuna from '../images/Attachments_WEBp_Other-Products/Tuna.webp';
import CannedFood from '../images/Attachments_WEBp_Other-Products/Canned_Food.webp';
import Zatar from '../images/Attachments_WEBp_Other-Products/Zatar.webp';
import Spices from '../images/Attachments_WEBp_Other-Products/Spices.webp';
import Tea from '../images/Attachments_WEBp_Other-Products/Tea.webp';
import ThaiFruits from '../images/Attachments_WEBp_Other-Products/Thai_Fruits.webp';
import Nuts from '../images/Attachments_WEBp_Other-Products/Nuts.webp';
import Shrimps from '../images/Attachments_WEBp_Other-Products/Shrimps.webp';
import Hazelnut from '../images/Attachments_WEBp_Other-Products/Hazelnut.webp';
import Pistachio from '../images/Attachments_WEBp_Other-Products/Pistachio.webp';
import PistachioPowder from '../images/Attachments_WEBp_Other-Products/Pistachio_Powder.webp';
import Honey from '../images/Attachments_WEBp_Other-Products/Honey.webp';
import Safron from '../images/Attachments_WEBp_Other-Products/Safron.webp';
import Pickles from '../images/Attachments_WEBp_Other-Products/Pickles.webp';
import DishWashings from '../images/Attachments-WEBp_for_Long-ones/Dish_Washings.webp';
import Disinfectant from '../images/Attachments-WEBp_for_Long-ones/Disinfectant.webp';
import HandWashes from '../images/Attachments-WEBp_for_Long-ones/Hand_Washes.webp';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Products({ normalization }) {
  const [visibled, setVisibled] = useState(false);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const jeux = [
    {
      image: Date1,
      titre: 'تمر',
    },
    {
      image: CoolIndustry,
      titre: 'فحم صناعي',
    },
    {
      image: Fish,
      titre: 'أسماك',
    },
    {
      image: Walnuts,
      titre: 'عين جمل / جوز',
    },
    {
      image: Tuna,
      titre: 'تونه',
    },
    {
      image: CannedFood,
      titre: 'معلبات',
    },
    {
      image: Zatar,
      titre: 'زعتر',
    },
    {
      image: Spices,
      titre: 'بهارات',
    },
    {
      image: Tea,
      titre: 'شاي',
    },
    {
      image: ThaiFruits,
      titre: 'فاكهة تايلنديه',
    },
    {
      image: Nuts,
      titre: 'مكسرات',
    },
    {
      image: Shrimps,
      titre: 'جمبري / قريدس',
    },
    {
      image: Hazelnut,
      titre: 'بندق',
    },
    {
      image: Pistachio,
      titre: 'فستق',
    },
    {
      image: PistachioPowder,
      titre: 'فستق مطحون',
    },
    {
      image: Honey,
      titre: 'عسل',
    },
    {
      image: Safron,
      titre: 'زعفران',
    },
    {
      image: Pickles,
      titre: 'مخلل',
    },
  ];

  const longOnes = [
    {
      image: DishWashings,
      titre: 'غسالات الأطباق',
    },
    {
      image: Disinfectant,
      titre: 'مطهر',
    },
    {
      image: HandWashes,
      titre: 'يغسل اليد',
    },
  ];

  useEffect(() => {
    const vesibledScroll = () => {
      normalization > 0.8519 ? setVisibled(true) : setVisibled(false);
    };

    window.addEventListener('scroll', vesibledScroll);

    return () => {
      window.removeEventListener('scroll', vesibledScroll);
    };
  }, [normalization]);

  useEffect(() => {
    gsap.set(div1Ref.current, {
      x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div1Ref.current,
      start: 'top 600px',
      end: 'bottom 600px',
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

    // =========================== obj 2
    gsap.set(div2Ref.current, {
      x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
      opacity: 0, // Rendez l'élément invisible
    });
    // Initialiser ScrollTrigger pour le premier élément
    ScrollTrigger.create({
      trigger: div2Ref.current,
      start: 'top 1100px',
      end: 'bottom 1100px',
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
          x: '-100%', // Déplacez l'élément à l'extérieur de la fenêtre du côté gauche
          opacity: 0, // Rendez l'élément invisible pendant qu'il sort de la fenêtre
          ease: 'power1.inOut',
        });
      },
    });
  }, []);

  return (
    <div className={` container-products ${visibled ? 'fixed-products' : ''}`}>
      <div className="title">
        <h2>بعض منتجاتنا الأخرى</h2>
      </div>
      <div ref={div1Ref} className="products">
        {jeux.map((jeu, index) => (
          <Produc
            key={index}
            image={jeu.image}
            titre={jeu.titre}
            description={jeu.description}
            isActive={jeu.isActive}
            // Ajoutez la propriété isLarge aux trois derniers éléments
            // isLarge={index >= jeux.length - 3}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div ref={div2Ref} className="products1">
        {longOnes.map((longone, index) => (
          <ProductsLongOnes
            key={index}
            image={longone.image}
            titre={longone.titre}
            description={longone.description}
            isActive={longone.isActive}
            // Ajoutez la propriété isLarge aux trois derniers éléments
            isLarge={index >= longOnes.length}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
