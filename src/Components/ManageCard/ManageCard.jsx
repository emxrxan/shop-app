import React from 'react'

export default function ManageCard(props) {
  return (
    <div className="btn-group">
        <button onClick={props.onClick} type="button" className="btn btn-primary btn-sm ms-1">+</button>
        <button onClick={props.onClick} type="button" className="btn btn-primary btn-sm">-</button>
    </div>
  )
}
