import { useInView } from "react-intersection-observer";
import {motion } from 'framer-motion';

import styled from "./natour.module.scss";

function Natour() {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section
     id="natour" 
     ref={ref}
     className="container"
     
     >
      <div className={styled.natour}>
        <motion.img
          src="/img/natours/top.jpg"
          alt="natour"
          className={styled.natour__img_top}
          initial={{ opacity: 0}}
          animate={isInView ? {opacity: 1} : {}}
          transition={{ type: 'tween', duration: 0.7}}
        />
        <motion.img
          src="/img/natours/left.jpg"
          alt="natour"
          className={styled.natour__img_left}
          initial={{ x: '-150%', opacity: 0}}
          animate={isInView ? {x:0, opacity: 1} : {}}
          transition={{ type: 'tween', duration: 1.3}}
        />
        <motion.img
          src="/img/natours/right.jpg"
          alt="natour"
          className={styled.natour__img_right}
          initial={{ x: '150%', opacity: 0, display: 'none'}}
          animate={isInView ? {x:0, opacity: 1, display: 'block'} : {}}
          transition={{ type: 'tween', duration: 1.7}}
        />

        <div className={styled.natour__block_top}></div>

        <motion.div className={styled.natour__block_buttom}
        initial={{ y: '100%', opacity: 0}}
        animate={isInView ? {y:0, opacity: 1} : {}}
        transition={{ type: 'tween', duration: 2.5}}
        >

        </motion.div>

        <motion.div className={styled.natour__desc}
          initial={{ y: '150%', opacity: 0}}
          animate={isInView ? {y:0, opacity: 1} : {}}
          transition={{ type: 'tween', duration: 2.1}}
        >
          Казань,{" "}
          <span className={styled.natour__two}>
            богатая не только историей и культурой, но и захватывающей природой,
          </span>{" "}
          предлагает уникальное сочетание урбанистической среды и природных
          красот.
          <span className={styled.natour__two}>
            Город величственно утоплен в зелени островов, парков и набережных,
            предлагая своим жителям и посетителям возможность насладиться
            природными чудесами.
          </span>
          <span className={styled.span__one}>
            Величественая Волга, живописные лесопарки, уютные скверы и
            удивительные озера создаютнеповторимую атмосферу идеальную для
            отдыха и релаксации в сердце города.
          </span>
        </motion.div>

        <motion.h2 className={styled.natour__title}
          initial={{ x: '150%', opacity: 0, display: 'none'}}
          animate={isInView ? {x:0, opacity: 1,  display: 'block'} : {}}
          transition={{ type: 'tween', duration: 0.9}}
        >
          Природные краски <br />
          Казанской флоры
        </motion.h2>

        <motion.p className={styled.natour__subtitle}
          initial={{ y: '150%', opacity: 0}}
          animate={isInView ? {y:0, opacity: 1} : {}}
          transition={{ type: 'tween', duration: 2.5}}
        >
          Природные <br />
          чудеса Казани: <br />
          зеленый оазис <br />
          спокойствия
        </motion.p>
      </div>
    </section>
  );
}

export default Natour;
