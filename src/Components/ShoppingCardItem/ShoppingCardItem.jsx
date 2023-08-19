import React, { useContext } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import ManageCard from '../ManageCard/ManageCard'
import Context from '../../Context'
import './ShoppingCardItem.css'

export default function ShoppingCardItem() {
    
    const { shoppingCard, setShoppingCard, totalCost, setTotalCost } = useContext(Context);

    const updatePrice = (operator, cardItem) => {
        switch(operator){
            case "+":
                    cardItem.amount++;
                    cardItem.totalCost = cardItem.price * cardItem.amount;
                    break;
            case "-":
                    if(cardItem.amount > 0){ cardItem.amount--}
                    cardItem.totalCost = cardItem.price * cardItem.amount;
                    break;
            default: 
                    alert("Error");
                    break;
        }
    } 

    const deleteEmptyItem = () => {
        const updateCard = [...shoppingCard].filter((element) => element.amount > 0);
        console.log(updateCard);
        setShoppingCard(updateCard);
    }

    const itemCost = (element, event) => {
        const updateCard = [...shoppingCard];
        let cost = 0;
        updateCard.forEach((cardItem) => {
            if(cardItem === element){
                updatePrice(event.target.textContent,cardItem);
                deleteEmptyItem();
            }
            cost += cardItem.totalCost
        });
        setTotalCost(cost);
    }
  return (
    <div className='shoppingCardItem-Container'>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th >Item</th>
                    <th >Amount</th>
                    <th >Price</th>
                    <th >#</th>
                </tr>
            </thead>
            <tbody>
                {shoppingCard.map((element)=>{
                    return <tr key={element.name}>
                                <td>{element.name}</td>
                                <td>{element.amount}x <ManageCard onClick={(event)=>itemCost(element,event)}/></td>
                                <td>{(element.totalCost).toFixed(2)} €</td>
                                <td><MdDeleteForever className='delete-icon'/></td>
                            </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="1"></td>
                    <td>Total Cost: </td>
                    <td>{(totalCost).toFixed(2)} €</td>
                    <td><button type="button" className="btn btn-primary btn-sm" disabled>Payment</button></td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
