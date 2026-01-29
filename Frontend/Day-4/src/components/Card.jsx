import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import Buttons from './Buttons'

function Card(props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
      <div className="card" style={{width: '18rem'}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Buttons button="please press"/>
        </div>
      </div>
    </div>
  )
}

export default Card