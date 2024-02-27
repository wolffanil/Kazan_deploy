import { useState } from 'react';
import styled from './main.module.scss';
import {motion} from 'framer-motion';

function Main() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styled.main}>
        <div className='container'>
        <header>
            <nav className={styled.nav}>
                <div className={styled.nav__logo}>
                    <img src="/icons/logo.svg" alt="logo" className={styled.nav__logo} />
                </div>

                <ul className={styled.nav__wrapper}>
                    <li className={styled.nav__wrapper__item}
                    ><a href="#blocks">Культура</a></li>
                    <li className={styled.nav__wrapper__item}><a href="#natour">Природа</a>
                    </li>
                    <li className={styled.nav__wrapper__item}>
                    <a href="#form">Видео</a>
                    </li>
                </ul>

                <div as='button' className={styled.nav__menu} onClick={() => setIsOpen((open) => !open)}>
                    
                    <img src={isOpen ? '/icons/close.svg' : '/icons/menu.svg'} alt="menu" />
                </div>

                <motion.ul className={styled.nav__wrapper_m}
                    initial={!isOpen ? {x: '150%', opacity: 0, y: '20px'} : {}}
                    transition={{ duration: 0.9, type: 'tween'}}
                    animate={isOpen ?{x: 0, y: '20px', opacity: 1}: {}}
                    onClick={() => setIsOpen(false)}
                >
                    <li className={styled.nav__wrapper__item}
                    ><a href="#blocks">Культура</a></li>
                    <li className={styled.nav__wrapper__item}><a href="#natour">Природа</a>
                    </li>
                    <li className={styled.nav__wrapper__item}>
                    <a href="#form">Видео</a>
                    </li>
                </motion.ul>
            </nav>
        </header>

        <h1 className={styled.main__title}>Погрузитесь в атмосферу <br /> Казани</h1>
        </div>

    </div>
  )
}

export default Main