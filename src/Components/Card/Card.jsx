import React, { useContext } from 'react'
import './Card.css'
import CardItem from '../Card-Item/Card-Item'
import Context from '../../Context'

export default function Card() {

  const { shoppingCard, setShoppingCard , item, totalCost, setTotalCost} = useContext(Context);

  const addItem = (itemElement) => {

    const updateCard = [...shoppingCard];

    if(!updateCard.find((element) => element.name === itemElement.name )){
      updateCard.push(itemElement);
      setShoppingCard(updateCard);
      setTotalCost(totalCost + itemElement.totalCost);
    } else {
      alert(`Your Card already includes: ${itemElement.name}`);
    }
  }

  return (
    <div className='card-flexcontainer'>
      {item.map((element) => {
        return <CardItem onClick={()=>addItem(element)} img={element.img} name={element.name} describe={element.describe} price={element.price} key={element.name}/>
      })}
    </div>
  )
}
