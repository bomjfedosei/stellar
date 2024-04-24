// import './App.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header'

import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import { getIngredients } from '../../services/actions/ingridients'
import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from './app.module.css'

const App = () => {
  const dispatch = useDispatch();
  const { ingridients, isLoading } = useSelector(store => store.ingridients);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  console.log(styles.AppHeader);
  return (
    <div className={styles.App} >
      <AppHeader className={styles.AppHeader}/>
      {isLoading ? (
        <h1>Пожайлуста, подождите ...</h1>
      ) : (
        <div className={styles.inner}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients title={'Соберите бургер'} ingridients={ingridients} />
            <BurgerConstructor />
          </DndProvider>
        </div >
      )}
    </div>
  );
}

export default App;