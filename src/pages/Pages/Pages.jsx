import Home from '../Home/Home';
import Cuisine from '../Cuisine/Cuisine';
import Searched from '../SearchedRecipe/Searched';
import Recipe from '../Recipe/Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';


function Pages() {

  const location = useLocation();


  return (

    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>

  );
}

export default Pages;