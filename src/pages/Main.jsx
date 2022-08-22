import Pages from './Pages';
import { useState, useEffect } from 'react';
import Category from '../components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/Search';
import styles from './main.module.css'
import video from '../img/bgvideo.mp4'


function Main() {

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };

    const words = ["yummy!", "healthy!", "delicious!", "simple!", "fancy!", "good!"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);


    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);


    return (
        <div className={styles.main}>
            <video
                autoPlay>
                <source src={video} type="video/mp4" />
            </video>
            <div className={styles.mainContent}>
                <h1 className={styles.titleMainContent}>
                    Let's cook something {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                </h1>
                <button onClick={handleClick} className={styles.getRecipes}> Get Recipes </button>
            </div>
            <BrowserRouter>
                {isShown && <Search />}
                {isShown && <Category />}
                {isShown && <Pages />}
            </BrowserRouter>
        </div >
    );
}


export default Main