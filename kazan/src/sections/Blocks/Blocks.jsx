import { useInView } from 'react-intersection-observer';
import styled from './blocks.module.scss';
import {motion} from 'framer-motion';


function Blocks() {
    const [ref, isInView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
      

  return (
    <motion.section id="blocks" className='container'
    
    ref={ref}
   
      >
        <div className={styled.blocks}>
            <motion.div className={styled.blocks__item}
                   initial={{x: '-100%',opacity: 0}}
                   animate={isInView ?{ x: 0, opacity: 1}: {}}
                   transition={{ type: 'tween', duration: 0.5}}
            >
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/Kyl.svg" alt="kyl" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Уникальные
достопримечатьности</h2>

                <p className={styled.blocks__item__desc}>Познакомьтесь с удивительными достопримечательностями Казани, раскройте для себя всю красоту и богатство истории этого города</p>
            </motion.div>

            <motion.div className={styled.blocks__item}
            initial={{y: '30%',opacity: 0}}
            animate={isInView ? { y: 0, opacity: 1}: {}}
            transition={{ type: 'tween', duration: 0.5}}
            >
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/muslin.svg" alt="muslin" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Культурные
                <br />
богатсва</h2>

                <p className={styled.blocks__item__desc}>Откройте для себя уникальные места и культурные достопримечательности культурной столицы Татарстана с нами</p>
            </motion.div>


            <motion.div className={styled.blocks__item}
                   initial={{x: '150%',opacity: 0, display: 'none'}}
                   animate={isInView ?{ x: 0, opacity: 1, display: 'flex'}: {}}
                   transition={{ type: 'tween', duration: 0.5}}
            >
                <div className={styled.blocks__item__cyrcl}>
                    <img src="/icons/person.svg" alt="person" className={styled.blocks__item__img}/>
                </div>

                <h2 className={styled.blocks__item__title}>Беззаботное <br />
знакомство</h2>

                <p className={styled.blocks__item__desc}>Будьте уверены, что с нашей помощью вы сможете насладиться всем многоообразием и красотой Казани без лишних хлопот и забот</p>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Blocks