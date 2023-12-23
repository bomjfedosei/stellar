import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'

import PropTypes from 'prop-types';


const modalRoot = document.getElementById("react-modals");


const Modal = ({ setIsOpenModal, title, children }) => {

    React.useEffect(() => {
        const handleEsc = (e) => {
            e.key === "Escape" && setIsOpenModal();
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [setIsOpenModal]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.window} >
                <div className={styles.header}>
                    <p className={styles.text}>{title}</p>
                    <CloseIcon
                        onClick={setIsOpenModal}
                        styles={{ width: '18px', height: '18px' }}
                    />
                </div>
                {children}
            </div>
            <ModalOverlay setIsOpenModal={setIsOpenModal} />
        </>,
        document.getElementById('modals'));
}


Modal.propTypes = {
    title: PropTypes.string,
    setIsOpenModal: PropTypes.func,
    children: PropTypes.object.isRequired
};

export default Modal;