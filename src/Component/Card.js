import React from 'react'
import './Card.css'

const Card = ({name,pChange,lastPrice,change}) => {
  return (
    <div className='cardiv1'>
      <div>
        <h3>{name}</h3>
      </div>
      <div className="carddiv2col">
        <div className="carddiv2col2">
          <h2>{lastPrice}</h2>
          <p>Price</p>
        </div>
      </div>
      <div className="footerdiv">
        <div className="footerRow1"> 
          <div className="footerCol1">
            <h3>{pChange}</h3>
            <h3>{change}</h3>
          </div>
        </div>
        <div className="footerRow2"> 
          <div className="footerCol2">
            <p>%Change</p>
            <p>Change</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

// <div className="footerdivleft">
//           <h4>160</h4>
//           <br />
//           <p>% Change</p>
//         </div>
//         <div className="footerdivright">
//           <h4>160</h4>
//           <p> Change</p>
//         </div>