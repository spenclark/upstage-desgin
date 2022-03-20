import React, { useEffect, useState } from 'react'
import "../App.css"

function Hero() {
  const heroImg = [{
    img: "/curated_portfolio/pan_lv_room.jpg",
    alt: "Background picture of home"
  },{
    img: "/curated_portfolio/pan_bedroom.jpg",
    alt: "Background picture of home"
   
  }, {
    img: "/curated_portfolio/pan_sydney_lv.jpg",
    alt: "Background picture of home"
  }]

  const [photo, setPhoto] = useState(heroImg[0].img)

  function handleSlideshow() {

  }

  return (
    <div>
      <div className='hero__modal'>
        <div className='hero__container'>
          <h1>
            
          </h1>
          <p><span>Upstage Design</span> will help .</p>
        </div>
        <div onClick={() => window.location = 'mailto:cynthia@upstagedesign.ca'}>
          Contact Us
        </div>
      </div>
      <div className='gallery'>
        <img src={photo} className="gallery__item" />
      </div>
    </div>
  )
}

export default Hero