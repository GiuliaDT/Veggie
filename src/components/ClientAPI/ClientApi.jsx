import axios from "axios";

const baseUrlVegan = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_NEW}&number=50&tags=vegan`
const baseUrlVeggie = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_NEW}&number=100&tags=vegetarian`

//VEGAN DATA FETCH AXIOS

export const downloadVeganData = async () => {
    const res = await axios.get(baseUrlVegan);
    return res;
}


//VEGGIE DATA FETCH AXIOS

export const downloadVeggieData = async () => {
    const res = await axios.get(baseUrlVeggie);
    return res;
}


// SEARCHED DATA FETCH AXIOS

export const getSearched = async (name) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_NEW}&query=${name}`)
    return res
}


// RECIPES DATA FETCH AXIOS
export const getRecipes = async (name) => {

    const res = await axios.get(`https://api.spoonacular.com/recipes/${name}/information/?apiKey=${process.env.REACT_APP_API_KEY_NEW}`)
    return res;
}


//// CATEGORY DATA FETCH AXIOS
export const getCuisine = async (name) => {

    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_NEW}&diet=vegetarian&cuisine=${name}`)
    return res;
}