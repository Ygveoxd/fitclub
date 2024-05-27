import React from 'react';
import styles from './Programs.module.scss'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div>
        <div className={styles.programs} id="Programs">
            <div className={styles.programs_header}>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className={styles.program_categories}>
                {programsData.map((program, idx) => (
                    <div key={idx} className={styles.category}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className={styles.join_now}>
                            <span>Join Now</span> <img src={RightArrow} alt="" />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  );
};

export default Programs;