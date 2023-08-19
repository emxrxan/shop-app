import React from 'react'
import './Card-Item.css'

export default function CardItem(props) {
  return (
    <div className="card">
        <img src={`./img/${props.img}`} className="card-img-top" alt={props.img} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.describe}<br /> <b>{props.price}</b> pro Stück.</p>
            <button onClick={props.onClick} type="button" className="btn btn-primary btn-sm w-100">Add to Card</button>
        </div>
    </div>
  )
}
