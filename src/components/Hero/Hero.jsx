import React from 'react';
import styles from './Hero.module.scss'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration : 3}
    const mobileWidth = window.innerWidth <= 768 ? true : false

  return (
    <div className={styles.hero} id='Hero'>
        <div className={`blur ${styles["hero-blur"]}`}></div>
        <div className={styles.left_h}>
            <Header />
            
            {/* The Best Add */}
            <div className={styles.the_best_ad}>
                
                <motion.div
                initial={{left: mobileWidth ? '150px' : '238px'}}
                whileInView={{left: '9px'}}
                transition={{...transition, type:'tween'}}
                >

                </motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className={styles.hero_text}>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <span className={styles.hero_text_span}>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>

            </div>

            {/* figures */}
            <div className={styles.figures}>
                <div>
                    <span>+ 140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+ 978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* hero buttons */}

            <div className={styles.hero_buttons}>
                <button>Get Started</button>
                <button>Learn More</button>
            </div>
        </div>

        <div className={styles.right_h}>
            <button>Join Now</button>
            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right : '4rem'}}
            className={styles.heart_rate}
            transition={transition}>
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span className={styles.heart_rate_span}>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img src={hero_image} alt="" className={styles.hero_image} />
            <motion.img 
            src={hero_image_back} 
            alt="" 
            className={styles.hero_image_back} 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            />

            {/* calories */}
            <div className={styles.calories}>
                <img src={Calories} alt="" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>

            </div>

        </div>
    </div>
  );
};

export default Hero;