import {useRef, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ScrollToTop from "react-scroll-to-top";

import styled from "./slider.module.scss";
import { sliderItems } from "./sliderProducts";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item/Item";

function Coursel() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const sliderRef = useRef();
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next + 1);
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]
  
  };

  return (
    <>
    
    <motion.section
     id="slider"
     className={`container ${styled.slider__section}`}
     ref={ref}
     initial={{ y: '30%', opacity: 0}}
     animate={isInView ?{ y: 0, opacity: 1}: {}}
     transition={{ type: 'tween', duration: 0.5}}
     style={{
      'overflow': 'hidden'
     }}
     >
      <div className={styled.slider__wrapper}>
        <img src="/icons/left.svg" alt="left" className={styled.slider__wrapper__left} onClick={() => sliderRef.current.slickPrev()} />
        <Slider {...settings} ref={sliderRef}>
          {sliderItems.map((item, key) => (
            <Item
            key={key}
            title={item.title}
            img={item.img}
            desc={item.desc}
            />
            ))}
        </Slider>
             <img src="/icons/left.svg" alt="left" className={styled.slider__wrapper__right}
              onClick={() =>sliderRef.current.slickNext()}
             />
      </div>

      <div className={styled.slider__count}
       
       >
        0

        <motion.span
        key={activeSlide}
        initial={{opacity: 0, y: -45}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, type: "tween"}}
        
        >

          {activeSlide}
        </motion.span>

      </div>

      
    </motion.section>

    <ScrollToTop smooth color="#EDAC72" top={70} style={{
        borderRadius: '20px',
        right: '20px'
      }} />
   </>
  );
}

export default Coursel;
