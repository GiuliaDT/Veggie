import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './searched.module.css';
import { getSearched } from "../../components/ClientAPI/ClientApi"
import Spinner from "../../components/Spinner/Spinner";

function Searched() {

  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false)
  let params = useParams();

  useEffect(() => {
    setLoading(true)
    const fetchSearched = getSearched(params.search)
    fetchSearched.then(res => setSearched(res.data.results))

  }, [params.search, setSearched])


  setTimeout(() => {
    setLoading(false);
  }, 1500);

  // FIRST COMMIT FETCH
  //function Searched() {
  //
  //  const [searched, setSearched] = useState([]);
  //  let params = useParams();
  //
  //const getSearched = async (name) => {
  //
  //  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_5}&query=${name}`);
  //  const recipes = await data.json();
  //
  //  setSearched(recipes.results);
  //
  //};
  //
  //useEffect(() => {
  //  getSearched(params.search);
  //}, [params.search]);
  //




  return (

    <div className={styles.wrapper}>
{loading ?
         <Spinner
         />

         :
      searched.map((item) => {
        return (
          <div className={styles.cardRecipe} key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} className={styles.cardImg} />
              <h2>{item.title}</h2>
              <button className={styles.viewRecipe}>Let's cook</button>
            </Link>
          </div>
        );
      })
      }

    </div>

  );
}

export default Searched