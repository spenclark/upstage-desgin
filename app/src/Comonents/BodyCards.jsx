import React, { useEffect, useState } from 'react'

function BodyCards() {

  const data = [ "/curated_portfolio/green_lv.jpg", "/curated_portfolio/ntr_light.jpg", "curated_portfolio/high_lv.jpg"
  ]


  return (
    <div className='slide__container'>
     <div className='slide__div '>
        <div>
          <img className='slide__img' src={data[0]} alt="case 1"></img>
        </div>
        <div className='slide__content'>
          <div className='slide__title'>
            <p>
              Why use staging services?
            </p>
          </div>
          <div className='slide__text'>
            <p>
            </p>
              According to industry research staged homes spend <span style={{fontWeight: "600"}}>73% less time</span> on the market and sell for <span style={{fontWeight: "600"}}>5% to 25% above</span> listing price. <a href="https://blog.remax.ca/do-staged-homes-sell-faster/" style={{color: "#B4182D"}}>See Report.</a>
          </div>
        </div>
      </div>
      <div className='slide__div__inverted '>
        <div>
          <img className='slide__img' src={data[1]} alt="case 1"></img>
        </div>
        <div className='slide__content'>
          <div className='slide__title'>
            <p>
              How it works
            </p>
          </div>
          <div className='slide__text'>
            <p>
              Upstage Design transforms property by reorganizing and restructuing spaces by blending the clients inventory and our own. <span style={{fontWeight: "600"}}>We work hard to make sure that the property is ready for the market.</span>
            </p>
          </div>
        </div>
      </div>
      <div className='slide__div '>
        <div>
          <img className='slide__img' src={data[2]} alt="case 1"></img>
        </div>
        <div className='slide__content'>
          <div className='slide__title'>
            <p>
              Resourceful and human
            </p>
          </div>
          <div className='slide__text'>
            <p>
              Upstage Design has experience working with all types of clients. We know how to use what is infront of us and be respectful of people property and space.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyCards