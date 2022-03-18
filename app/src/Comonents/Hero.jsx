import React, { useEffect, useState } from 'react'
import "../App.css"

function clientCard({props}) {
  return (
    <div className='client__card'>
        <img className='client__img' src={props.tag} atl={props.alt}></img>
    </div>
  )
}

function Hero() {
  const heroImg = {
    img1: "/curated_portfolio/pan_lv_room.jpg",
    img2: "/curated_portfolio/pan_bedroom.jpg",
    img3: "/curated_portfolio/pan_sydney_lv.jpg"
  }

  const [photo, setPhoto] = useState(heroImg.img2)

  useEffect(() => {
  })
  return (
    <div>
      <div className='hero__modal'>
        <div>
          <h1>
            Lorem Ipsum, Based as can be
          </h1>
          <p><span>Upstage Design</span> helps realtors and homeowners prepare.</p>
        </div>
       <div onClick={() => window.location = 'mailto:cynthia@upstagedesign.ca'}>
         Contact Us
       </div>
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