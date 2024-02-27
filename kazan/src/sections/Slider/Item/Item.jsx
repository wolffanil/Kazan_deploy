import { useState } from 'react';
import styled from './item.module.scss';
import {motion} from 'framer-motion';


function Item({ title, img, desc}) {
  // const [isHover, setIsHover] = useState(false);

  // const handleHover = () => {
  //   setIsHover((h) => !h);
  // }

  // const handleOut = () => {
  //   setIsHover((h) => !h);
  // }


  return (
    <>
    
    <div className={styled.item}>
    <div className={styled.item__block_top}/>
        <img src={img} alt="img" className={styled.item__img}
          // whileHover={{ zIndex: 1, scale: 1.2}}
          // transition={{duration: 0.2, type: "tween"}}
          // animate={isHover ? {zIndex: 1, width: '150%', height: '120%'}: {}}
          // onHoverStart={handleHover}
          // onHoverEnd={handleOut}
        />
        <div className={styled.item__block_wrapper}
          // transition={{ duration: 0.7, type: 'tween'}}
          // animate={isHover ?{x: '150%', opacity: 0} :{}}

        >
            <h2 className={styled.item__title}>{title}</h2>
            <p className={styled.item__desc}>{desc}</p>

            <button className={styled.item__button}>Узнать больше</button>
        </div>

       
    </div>
    
    </>
  )
}

export default Item