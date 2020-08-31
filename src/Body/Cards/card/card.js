import React from 'react'
import './card.css'

const card = (props) => {
    return (
        <div className="card text-white bg-info mb-3" >
  <div className="card-header">{props.status}</div>
  <div className="card-body">
    <h5 className="card-title">{props.number}</h5>
  </div>
</div>
    )
}

export default card
