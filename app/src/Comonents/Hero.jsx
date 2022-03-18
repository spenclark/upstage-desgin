import React, { useEffect, useState } from 'react'
import "../App.css"

function ClientCard({props}) {
  return (
    <div className='client__card'>
        <img className='client__img' src={props.img} atl={props.alt}/>
    </div>
  )
}

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

  const clientImg = [{
    img: "ev-logo.png",
    alt: "engle volkers logo"
  }, {
    img: "mac-logo.jpg",
    alt: "macdonald realty"
  }, {
    img: "new-logo.jpg",
    alt: "newport reality"
  }
]

  const [photo, setPhoto] = useState(heroImg[0].img)

  function handleSlideshow() {

  }

  return (
    <div>
      <div className='hero__modal'>
        <div className='hero__container'>
          <h1>
            Lorem Ipsum, Based as can be
          </h1>
          <p><span>Upstage Design</span> helps realtors and homeowners prepare.</p>
        </div>
          <div className="client__parent">
          <p style={{fontWeight: "600", fontSize: "18px", color: "black", marginBottom: "20px"}}>Trusted By</p>
          <div className="client__child">
            {clientImg.map((e) => {
              return (
              <ClientCard props={e} />
            )})}
          </div>
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