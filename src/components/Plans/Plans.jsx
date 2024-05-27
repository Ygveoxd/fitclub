import React from 'react';
import styles from './Plans.module.scss';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div>
        <div className={styles.plans_container} id='Plans'>
            <div className={`blur ${styles["plans-blur1"]}`}></div>
            <div className={`blur ${styles["plans-blur2"]}`}></div>
            <div className={styles.plans_header}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            {/* plans card */}
            <div className={styles.plans}>
                {plansData.map ((plan, idx) => (
                    <div className={styles.plan} key={idx}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className={styles.features}>
                            {plan.features.map((feature, idx) => (
                                <div className={styles.feature} key={idx}>
                                    <img src={whiteTick} alt="" />
                                    <span key={idx}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <span>
                                See more benefits ->
                            </span>
                        </div>
                        <button>
                            Join now
                        </button>
                    </div>   

                ))}
            </div>

        </div>
    </div>
  );
};

export default Plans;