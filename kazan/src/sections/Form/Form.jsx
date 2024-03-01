import { useState } from "react";
import styled from "./form.module.scss";
import { motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

function Form() {
  const [isVideo, setIsVideo] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="form" ref={ref}>
      <div className={styled.form}>
        <div className={styled.form__nav}>
          <button
            className={`${styled.form__nav__button_left} ${
              !isVideo && styled.form__nav_active
            }`}
            onClick={() => setIsVideo(false)}
          >
            Связь
          </button>
          <button
            className={`${styled.form__nav__button_right} ${
              isVideo && styled.form__nav_active
            }`}
            onClick={() => setIsVideo(true)}
          >
            Видео
          </button>
        </div>

        <form
          className={`${styled.form__call} ${styled.form__container} ${
            !isVideo && styled.form__fullscreen
          }`}
        >
          <h2 className={styled.form__call__title}>Связаться с нами</h2>

          <p className={styled.form__call__subtitle}>
            Получите дополнительную консультацию
          </p>

          <motion.input 
            initial={{ y: '100%', opacity: 0}}
            animate={inView ? { y: 0, opacity: 1} : {}}
            transition={{ type: 'tween', duration: 1.2}} 
          type="text" required minLength={3} className={styled.form__call__input} placeholder="Ваше имя" />

          <motion.input
            initial={{ y: '70%', opacity: 0}}
            animate={inView ? { y: 0, opacity: 1} : {}}
            transition={{ type: 'tween', duration: 1.7}} 
          type="text" required minLength={3} className={styled.form__call__input} placeholder="Ваш номер телефона" />

          <div className={styled.form__call__wrapper}>
            <input type="checkbox" required />
            <p className={styled.form__call__checktext}>
              Согласие на обработку персональных данных
            </p>
          </div>

          <motion.button
            initial={{ y: '100%', opacity: 0}}
            animate={inView ? { y: 0, opacity: 1} : {}}
            transition={{ type: 'tween', duration: 1.7}} 
          type="submit" className={styled.form__call__button}>
            Отправить
          </motion.button>
        </form>

        <video
          src="/kazan.mp4"
          controls
          muted
          className={`${styled.form__video} ${
            isVideo && styled.form__fullscreen
          }`}
        ></video>
      </div>
    </section>
  );
}

export default Form;
