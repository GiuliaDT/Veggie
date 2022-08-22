import React, { useEffect, useState } from 'react'
import styles from './vegan.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { Link } from 'react-router-dom'



function Vegan() {

    const [vegan, setVegan] = useState([]);

    useEffect(() => {
        getVegan();

    }, []);

    const getVegan = async () => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=30&tags=vegan`);

        const data = await api.json();
        setVegan(data.recipes)
    }


    return (
        <div className={styles.wrapper}>
            <h1>Top Vegan Picks</h1>
            <Splide
                options={{

                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: 'free',
                    breakpoints: {
                        1024: {
                            perPage: 2,
                            pagination: false,

                        },
                        767: {
                            perPage: 1,
                            pagination: false,

                        },
                    },

                }}>
                {vegan?.map((recipe) => {
                    return (

                        <SplideSlide>
                            <h2 className={styles.veganRecipe}> {recipe.title}</h2>
                            <Link to={'/recipe/' + recipe.id}>
                                <div key={recipe.id} className={styles.cardRecipe}>
                                    <img src={recipe.image} alt={recipe.title} className={styles.cardImg} />
                                </div>

                            </Link>

                        </SplideSlide>
                    );
                })}
            </Splide>

        </div>
    )
}


export default Vegan;