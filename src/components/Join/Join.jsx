import React, { useRef } from 'react';
import styles from './Join.module.scss'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_p4gd3yd', 'template_fvh5dyi', form.current, {
            publicKey: 'A4AUwG2V6qCZg2xrZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };



  return (
    <div className={styles.join} id="Join">
        <div className={styles.join_left}>
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span> Level up</span>
            </div>
            <div>
                <span>Your body</span>
                <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className={styles.join_right}>
            <form ref={form} className={styles.email} action="" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email adress'/>
                <button onClick={sendEmail} className={styles.button_join}>
                    Join Now
                </button>
            </form>
        </div>
    </div>
  );
};

export default Join;