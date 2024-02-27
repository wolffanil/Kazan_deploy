import styled from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styled.footer}>
      <div className={styled.footer__block}></div>

      <div className={styled.footer__bg}>
        <div className="container">
          <div className={styled.footer__wrapper}>
            <div className={styled.logo}>
              <img
                src="/icons/logo.svg"
                alt="logo"
                className={styled.footer__img}
              />
              <div className={styled.footer__logo}>
                <img
                  src="/icons/copyrigth.svg"
                  alt="copyrigth"
                  className={styled.footer__img_m}
                />
                2024 Kazan. Все права защищены.
              </div>
            </div>

            <div className={styled.footer__links}>
              <ul className={styled.footer__nav}>
                <li>
                  <a href="" className={styled.footer__items}>
                    Главная
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Вдохновение
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Видео
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Панорама
                  </a>
                </li>
              </ul>

              <ul className={styled.footer__nav}>
                <li>
                  <a href="" className={styled.footer__items}>
                    Авиоселс
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Вк
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Телеграм
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
