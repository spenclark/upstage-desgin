import React, { useEffect, useState } from 'react'
import "../App.css"

function clientCard({props}) {
  return (
    <div>

    </div>
  )
}

function Hero() {
  const img = {
    img1: "/curated_portfolio/pan_lv_room.jpg",
    img2: "/curated_portfolio/pan_bedroom.jpg",
    img3: "/curated_portfolio/pan_sydney_lv.jpg"

  }

  const [photo, setPhoto] = useState()

  useEffect(() => {
    setPhoto(img.img3)
  })
  return (
    <div>
      <div className='hero__modal'>
       <h1>

       </h1>
       <p><span>Upstage Design</span> . Call </p>
      </div>
      <div className='gallery'>
        <img src={photo} className="gallery__item" />
      </div>
      <div>
        <p>Trusted By</p>

      </div>
    </div>
  )
}

export default Hero