import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  
  return (
    <div className={styles.header} id='Header'>
        <a href="/">
            <img src={logo} alt="logo" />
        </a>
        {(menuOpened === false && mobile === true) ? (
          <div 
          onClick={() => setMenuOpened(!menuOpened)}
          style={{
            backgroundColor: '#3c3f45', 
            padding: '0.5rem', 
            borderRadius: '5px',
            width: '1.5rem', 
            height: '1.5rem'}}
          >
            <img 
            src={Bars} 
            alt="bars" 
            style={{
              width: '1.5rem', 
              height: '1.5rem'
            }} />
          </div>
        ) : (
          <ul className={styles.header__menu}>
          <li >
            <Link
            onClick={() => setMenuOpened(false)}
            to='Hero'
            span={true}
            smooth={true}
            >Home</Link>
            </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
            to='Programs'
            span={true}
            smooth={true}
            >Programs</Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
            to='Reasons'
            span={true}
            smooth={true}
            >Why us</Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
            to='Plans'
            span={true}
            smooth={true}
            >Plans</Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
            to='Testimonials'
            span={true}
            smooth={true}
            >Testimonials</Link>
          </li>
      </ul>
        )}

    </div>
  );
};

export default Header;