import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './recipe.module.css'
import { getRecipes } from "../../components/ClientAPI/ClientApi"
import Spinner from '../../components/Spinner/Spinner';


function Recipe () {

	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("about");
	let params = useParams();
	const [loading, setLoading] = useState(false)

	useEffect (() => {
		setLoading(true)
		const fetchRecipes = getRecipes(params.name)
		fetchRecipes.then(res => setDetails(res.data))
		console.log(fetchRecipes)

	}, [params.name, setDetails])


    setTimeout(() => {
        setLoading(false);
      }, 1500);

// FIRST COMMIT FETCH
//function Recipe() {
//
//	let params = useParams();
//	const [details, setDetails] = useState({});
//	const [activeTab, setActiveTab] = useState("about");
//
//
//	useEffect(() => {
//		const fetchDetails = async () => {
//
//			const data = await fetch(`
//			https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY_NEW_K}`);
//
//			const detailData = await data.json();
//
//			setDetails(detailData);
//
//		};
//		fetchDetails();
//	}, [params.name]);
//
	return (
<>
{loading ?
         <Spinner
         />

         :
		<div className={styles.hero}>

			<h1>{details.title}</h1>
			<img src={details.image} alt={details.title} className={styles.recipeImg} />



			<div className={styles.buttons}>
				<button
					className={activeTab === 'about' ? 'active' : ""}
					onClick={() => setActiveTab('about')}>About</button>


				<button
					className={activeTab === 'instructions' ? 'active' : ""}
					onClick={() => setActiveTab('instructions')}>Instructions</button>


				<button
					className={activeTab === 'ingredients' ? 'active' : ""}
					onClick={() => setActiveTab('ingredients')}>Ingredients</button>
			</div>

			{activeTab === 'about' && (
				<div className={styles.about}>
					<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
				</div>
			)}
			{activeTab === 'instructions' && (
				<div className={styles.instructions}>
					<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
				</div>)}
			{activeTab === 'ingredients' && (
				<div className={styles.ingredients}>
					{details.extendedIngredients.map((ingredient) => (
						<h3 className={styles.list} key={ingredient.id}> - {ingredient.original} </h3>
					))}
				</div>
			)}
		</div>
}
		</>
	);

}

export default Recipe;