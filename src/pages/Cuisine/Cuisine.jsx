import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './cuisine.module.css'
import { getCuisine } from "../../components/ClientAPI/ClientApi"
import Spinner from '../../components/Spinner/Spinner';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    const [loading, setLoading] = useState(false)

    let params = useParams();

    useEffect(() => {
        setLoading(true)
        const fetchCategory = getCuisine(params.type)
        fetchCategory.then(res => setCuisine(res.data.results))
      }, [params.type, setCuisine])


    setTimeout(() => {
        setLoading(false);
      }, 1500);

//function Cuisine() {
//
//    const [cuisine, setCuisine] = useState([]);
//    let params = useParams();
//
//    const getCuisine = async (name) => {
//
//        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&cuisine=${name}`);
//        const recipes = await data.json().catch((err) => console.log(err))
//        setCuisine(recipes.results);
//    }
//
//
//    useEffect(() => {
//        getCuisine(params.type)
//    }, [params.type]);

    return (

        <div className={styles.wrapper}>

        {loading ?
         <Spinner
         />

         :
            cuisine.map(item => {
                return (
                    <Link to={'/recipe/' + item.id}>
                        <div className={styles.cardRecipe} key={item.id}>
                            <img src={item.image} alt={item.title} className={styles.cardImg} />
                            <h2>{item.title}</h2>
                            <button className={styles.viewRecipe}>Let's cook</button>


                        </div>

                    </Link>
                );
            })

        }

        </div>
    );
}

export default Cuisine