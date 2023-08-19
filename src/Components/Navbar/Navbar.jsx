import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Context from '../../Context';
import './Navbar.css'

export default function Navbar() {

    const { setIsOpen, shoppingCard } = useContext(Context);

    const openModal = () => {
        setIsOpen(true);
    }

    return (
    <header>
        <h2>Shopping</h2>
        <div className='ShoppingCart-Container' onClick={() => openModal()}>
            <span><FaShoppingCart /></span>
            <span className='card_number'>{shoppingCard.length > 0 ? shoppingCard.length : null}</span>
        </div>
    </header>
  )
}
