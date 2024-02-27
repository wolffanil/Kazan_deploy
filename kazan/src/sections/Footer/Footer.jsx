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
                  <a href="#main" className={styled.footer__items}>
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#slider" className={styled.footer__items}>
                    Места
                  </a>
                </li>
                <li>
                  <a href="#blocks" className={styled.footer__items}>
                    Культура
                  </a>
                </li>
                <li>
                  <a href="#natour" className={styled.footer__items}>
                    Природа
                  </a>
                </li>
              </ul>

              <ul className={styled.footer__nav}>
                <li>
                  <a href="https://www.aviasales.ru/?params=ASFKZN1" className={styled.footer__items}>
                    Авиоселс
                  </a>
                </li>
                <li>
                  <a href="https://vk.com/kzn?from=search" className={styled.footer__items}>
                    Вк
                  </a>
                </li>
                <li>
                  <a href="" className={styled.footer__items}>
                    Телеграм
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=MWrML2q6uGs" className={styled.footer__items}>
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
