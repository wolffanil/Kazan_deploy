import { useState } from "react";
import styled from "./form.module.scss";

function Form() {
  const [isVideo, setIsVideo] = useState(false);
  return (
    <section id="form">
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

          <input type="text" required minLength={3} className={styled.form__call__input} placeholder="Ваше имя" />

          <input type="text" required minLength={3} className={styled.form__call__input} placeholder="Ваш номер телефона" />

          <div className={styled.form__call__wrapper}>
            <input type="checkbox" required />
            <p className={styled.form__call__checktext}>
              Согласие на обработку персональных данных
            </p>
          </div>

          <button type="submit" className={styled.form__call__button}>
            Отправить
          </button>
        </form>

        <video
          src="/kazan.mp4"
          controls
          height='540'
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
