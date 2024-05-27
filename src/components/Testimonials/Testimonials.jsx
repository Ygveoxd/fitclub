import React, { useState } from 'react';
import styles from './Testimonials.module.scss'
import testimonialsData from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const transition = {type: 'spring', duration : 1}

    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length;




  return (
    <div className={styles.testimonials} id='Testimonials'>
        <div className={styles.left_testimonials}>
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <motion.span
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={transition}
            >
                {testimonialsData[selected].review}  
            </motion.span>
            <div>
                <span>{testimonialsData[selected].name}{' '} </span>
                - {testimonialsData[selected].status}
            </div>

        </div>
        <div className={styles.right_testimonials}>
            <motion.div 
            className={styles.backgroundBorder}
            initial={{ opacity: 0, x: -100}}
            whileInView={{ opacity: 1,x: 0}}
            transition={transition}
            />
            <motion.div 
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity: 1,x: 0}}
            transition={transition}
            className={styles.backgroundFill}></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} 
            className={styles.photo} />

            <div className={styles.arrows}>
                <img 
                onClick={() => {selected === 0 
                    ? setSelected(tLength - 1) 
                    : setSelected((prev) => prev - 1)
                }}
                src={leftArrow} 
                alt="" />
                <img 
                onClick={() => {selected === tLength - 1 
                    ? setSelected(0) 
                    : setSelected((prev) => prev + 1)}}
                src={rightArrow} 
                alt="" />
            </div>
        </div>
    </div>
  );
};

export default Testimonials;