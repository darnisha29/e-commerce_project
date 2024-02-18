import React from 'react'
import '../pages/ProductListing.css'


const Slidercard = ({item}) => {
 
  return (
<div className="slider-card">
      <img src={item.image}></img>
    </div>
  )
}

export default Slidercard
