import './app.module.css';
import { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';

import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import styles from './app.module.css'


const API = `https://norma.nomoreparties.space/api`;


const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function getIngredients() {
  return fetch(`${API}/ingredients`)
      .then(checkReponse)
}

function App() {
  const [state, setState] = useState({
    succes: false,
    data: []
  });

  useEffect(() => {
    getIngredients()
      .then((json) => setState({ data: json.data, succes: true }))
      .catch((err) => alert(err))
  }, []);

  return (
    <main className="App">
      <AppHeader />
      <div className={styles.inner}>
        <BurgerIngredients title={'Соберите бургер'} ingridients={state.data} />
        <BurgerConstructor ingridients={state.data} />
      </div >
    </main >
  );
}

export default App;
