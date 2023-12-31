import AppHeaderItem from '../app-header-item/app-header-item';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css'
import React from 'react';



function AppHeader() {
  const [active, setActive] = React.useState('Конструктор');


  return (
    <header className={styles.header} >
      <div className={styles.wrapper}>
        <AppHeaderItem
          onClick={() => setActive("Конструктор")}
          isActive={active === "Конструктор"}
          text="Конструктор"
          icon={<BurgerIcon />} />
        <AppHeaderItem
          onClick={() => setActive("Лента Заказов")}
          isActive={active === "Лента Заказов"}
          text="Лента Заказов"
          icon={<ListIcon />} />
        <div className={styles.logo}>
          <Logo />
        </div>
        <AppHeaderItem
          onClick={() => setActive("Личный кабинет")}
          isActive={active === "Личный кабинет"}
          text="Личный кабинет"
          icon={<ProfileIcon />} />
      </div>
    </header >
  );
}



export default AppHeader;