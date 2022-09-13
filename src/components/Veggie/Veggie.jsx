import React, { useState, useEffect } from "react";
import styles from './veggie.module.css';
import { FaRegHeart, FaRegClock, } from 'react-icons/fa'
import { BsPersonPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { downloadVeggieData } from "../ClientAPI/ClientApi";


function Veggie() {
    const [veggie, setVeggie ] = useState([]);
    const [visibile, setVisible] = useState(2)



    useEffect(() => {
        const fetchVeggie = downloadVeggieData()
		fetchVeggie.then(res => setVeggie(res.data.recipes))
	}, [setVeggie])

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 9);
    }


// FIRST COMMIT FETCH

//function Veggie() {
//
//    const [veggie, setVeggie] = useState([]);
//   const [visibile, setVisible] = useState(2)
////
//const showMoreItems = () => {
//      setVisible((prevValue) => prevValue + 9);
//  }
//
//    const getVeggie = async () => {
//
//        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_4}&number=100&tags=vegetarian`);
//
//
//        const data = await api.json();
//        console.log(data)
//        setVeggie(data.recipes)
//    }
//
//
//    useEffect(() => {
//        getVeggie();
//
//    }, []);
//



    return (

        <div className={styles.wrapper}>
            <div className={styles.textInfo}>
                <h1> Becoming a vegetarian  </h1>
                <h5> When individuals follow a vegetarian diet that provides them with the adequate nutrients they need, this type of diet can result in a number of health benefits. Appropriately planned vegetarian diets are not only nutritionally beneficial and may prevent and treat certain diseases, but they are also more environmentally sustainable because they use fewer natural resources than diets rich in animal products. Studies have repeatedly shown that vegetarian diets benefit long-term health. Find out more on this article by Harvard Medical School!</h5>
                <button onClick={() => window.open("https://www.health.harvard.edu/staying-healthy/becoming-a-vegetarian")} className={styles.getMoreInfo} > Find out more</button>

            </div>

            {veggie.slice(0, visibile).map((recipe) => {
                return (


                    <div key={recipe.id} className={styles.cardRecipe}>
                        <img src={recipe.image} alt={recipe.title} className={styles.cardImg} />

                        <h2>{recipe.title}</h2>
                        <ul className={styles.meal}>
                            <p className={styles.type}>{recipe.dishTypes[0]} </p>
                            <p className={styles.type}>{recipe.diets[0]}</p>
                        </ul>
                        <ul className={styles.info}>
                            <li><BsPersonPlus className={styles.item} />{recipe.servings}  </li>
                            <li><FaRegClock className={styles.item} /> {recipe.readyInMinutes} </li>
                            <li><FaRegHeart className={styles.item} /> {recipe.aggregateLikes}</li>

                        </ul>
                        <Link to={'/recipe/' + recipe.id}>
                            <button className={styles.viewRecipe}>Let's cook</button>
                        </Link>
                    </div>

                );
            })}

            <button onClick={showMoreItems} className={styles.loadMore}>Load More</button>

        </div>

    )
}
export default Veggie;