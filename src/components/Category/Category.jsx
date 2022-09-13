
import { GiChopsticks, GiGreekTemple, GiNoodles } from 'react-icons/gi';
import { FaPizzaSlice } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './category.module.css'

import React from 'react'

function Category() {
    return (
        <div className={styles.list}>
            <Link to={'/cuisine/Italian'} className={styles.link} >
                <FaPizzaSlice className={styles.svgCategory} />
                <h4>Italian</h4>
            </Link>
            <Link to={'/cuisine/Chinese'} className={styles.link}>
                <GiChopsticks className={styles.svgCategory} />
                <h4>Chinese</h4>
            </Link>
            <Link to={'/cuisine/Thai'} className={styles.link}>
                <GiNoodles className={styles.svgCategory} />
                <h4>Thai</h4>
            </Link>
            <Link to={'/cuisine/Greek'} className={styles.link}>
                <GiGreekTemple className={styles.svgCategory} />
                <h4>Greek</h4>
            </Link>
        </div>
    );
}

export default Category;