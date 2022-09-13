import styles from './search.module.css'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search Recipes" />
      </div>
    </form>
  );
}
export default Search;