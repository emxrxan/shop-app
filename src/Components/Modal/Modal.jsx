import React, { useContext } from 'react'
import { createPortal } from 'react-dom';
import Context from '../../Context'
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import './Modal.css'

export default function Modal() {

    const { isOpen, setIsOpen } = useContext(Context);
    
    const closeModal = () => {
        setIsOpen(false);
    }

    if(!isOpen){
        return null
    }else{
        return createPortal(
            <div className="modalMainContainer">
                <div className='modalContainer'>
                    <h3>Shopping Card</h3>
                    <button onClick={() => closeModal()} type="button" className="btn-close fs-4 closeModal" aria-label="Close"></button>
                    <ShoppingCardItem />
                </div>
            </div>
        ,document.getElementById("shoppingCard"))
    }
}
