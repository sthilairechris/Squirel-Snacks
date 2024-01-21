import React from 'react'
import Map from './Map'
import "../App.css"





function SpotCard ({title, content, imageUrl}) {
  return ( <>
    <div className="SpotCard">
    <img src={imageUrl} alt={title} className="card-image" />
    <h2>{title}</h2>
    <p>{content}</p>
    <Map />
    </div>
  </>
    
  )
}
export default SpotCard