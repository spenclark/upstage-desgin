import React, { useEffect, useState } from 'react'
import "../App.css"

function Hero() {
  const img = {
    img1: "/curated_portfolio/pan_lv_room.jpg",
    img2: "/curated_portfolio/pan_bedroom.jpg"
  }

  const [photo, setPhoto] = useState()


  return (
    <div>
      <div>
       <h1>
      
       </h1>
       <p><span>Upstage Design</span> . Call </p>
      </div>
      <div className='gallery'>
        <img src={photo} className="gallery__item" />
      </div>
    </div>
  )
}

export default Hero