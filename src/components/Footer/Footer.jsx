import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className={styles.footer} id='Footer'>

        <div className={styles.links}>
            <a href=""><img src={github} /></a>
            <a href=""><img src={instagram} /></a>
            <a href=""><img src={linkedin} /></a> 
        </div>
        <img src={logo} alt="Logo" />
        <div className={`blur ${styles["footer-blur1"]}`}></div>
        <div className={`blur ${styles["footer-blur2"]}`}></div>
    </div>
  );
};

export default Footer;