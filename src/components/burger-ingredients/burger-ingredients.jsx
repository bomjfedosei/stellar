import styles from './burger-ingredients.module.css';
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useInView } from "react-intersection-observer";
import cardTypes from "../../utils/propsType";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from '../burger-ingredients-group/burger-ingredients-group'
import { Link } from 'react-scroll'
import { useDispatch, useSelector } from "react-redux";

const BurgerIngredients = ({ title, ingridients }) => {
  const [current, setCurrent] = React.useState('Булки');
  const [bunsRef, bunsInView, bunsTab] = useInView({ threshold: 0 });
  const [saucesRef, saucesInView, saucesTab] = useInView({ threshold: 0 });
  const [mainsRef, mainsInView, mainsTab] = useInView({ threshold: 0 });

  const onTabClick = (tabType, entry) => {
    setCurrent(tabType);
    //entry.target.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    mainsInView && setCurrent("Начинки");
    saucesInView && setCurrent("Соусы");
    bunsInView && setCurrent("Булки");
  }, [bunsInView, saucesInView, mainsInView]);

  const bun = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'bun')
    , [ingridients]);
  const main = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'main')
    , [ingridients]);
  const sauces = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'sauce')
    , [ingridients]);


  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{title}</h1>
      <div className={`${styles.tabs} pt-5`}>
        <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Булки')}>
          <Tab value="Булки" active={current === 'Булки'} onClick={()=> onTabClick("Булки", bunsRef)}>Булки</Tab>
        </Link>
        <Link to="main" spy={true} smooth={true} offset={30} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Начинки')}>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={()=> onTabClick("Начинки", mainsRef)}>Начинки</Tab>
        </Link>
        <Link to="sauces" spy={true} smooth={true} offset={28} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Соусы')}>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={()=> onTabClick("Соусы", saucesRef)}>Соусы</Tab>
        </Link>
      </div>
      <div className={`${styles.cardsContainer} custom-scroll`} id="containerElement">
        <BurgerIngredientsGroup id="bun" title='Булки' ingridients={bun} bunsRef={bunsRef}/>
        <BurgerIngredientsGroup id="main" title='Начинки' ingridients={main} bunsRef={mainsRef}/>
        <BurgerIngredientsGroup id="sauces" title='Соусы' ingridients={sauces} bunsRef={saucesRef}/>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredients;