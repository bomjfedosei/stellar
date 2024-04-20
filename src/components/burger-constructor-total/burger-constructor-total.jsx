import styles from './burger-constructor-total.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderDetails } from '../../services/actions/order';


const BurgerConstructorTotal = ({ text, icon }) => {
    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

    const { bun, constructorIngridients } = useSelector(state => state.burgerConstrucor);
    const user = useSelector(state => state.auth.user);

    const ingridientsIds = (constructorIngridients).map((ingridient) => ingridient._id);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const getOrder = () => {
        if (bun === null || ingridientsIds.length === 0) {
            setIsPopUpOpen(true)
            setTimeout(() => setIsPopUpOpen(false), 3000)
        } else {
            if (user.isLogedIn) {
                navigate('/order', { state: { background: location } })
                dispatch(getOrderDetails([bun._id, ...ingridientsIds, bun._id]))
            } else {
                navigate('/login')
            }
        }
    }


    return (
        <>
            <div className={`${styles.wrapper} pt-10 mr-10`}>
                {isPopUpOpen &&
                    <p className={styles.popUp}>Выберите булки и хотя бы 1 ингридиент</p>
                }
                <div className={`${styles.counter} mr-10`} >
                    <span className={`${styles.text}`} >{text}</span>
                    <span className={`${styles.icon}`}>{icon}</span>
                </div>
                <Button onClick={() => getOrder()}
                    htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div >
        </>
    )
}

BurgerConstructorTotal.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default BurgerConstructorTotal;