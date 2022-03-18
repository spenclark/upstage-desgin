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
    img: "",
    alt: "engle volkers logo"
  }, {
    img: "",
    alt: ""
  }, {
    img: "",
    alt: ""
  }
]

  const [photo, setPhoto] = useState(heroImg[0].img)

  function handleSlideshow() {

  }

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