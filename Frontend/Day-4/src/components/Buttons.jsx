import React from 'react'
import './Buttons.css'

function Buttons(props) {
  return (
    <div>
      <button className="btn-custom">{props.button}</button>
    </div>
  )
}

export default Buttons