import React from 'react'

function BodyCards() {



  return (
    <div className='slide__container'>
     <div className='slide__div '>
        <div>
          <img className='slide__img' src="/curated_portfolio/green_lv.jpg" alt="case 1"></img>
        </div>
        <div className='slide__content'>
          <div className='slide__title'>
            <p>
              Why use staging services?
            </p>
          </div>
          <div className='slide__text'>
            <p>
                      According to industry research staged homes spend<span style={{fontWeight: "600"}}> 73 per cent less time on the market and sell for 5% to 25% above listing price.</span> <a href="https://blog.remax.ca/do-staged-homes-sell-faster/" style={{color: "#B4182D"}}>See Report.</a>
            </p>
          </div>
        </div>
      </div>
      <div className='slide__div__inverted '>
        <div>
          <img className='slide__img' src="/curated_portfolio/ntr_light.jpg" alt="case 1"></img>
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
          <img className='slide__img' src="/curated_portfolio/prpl_brm.jpg" alt="case 1"></img>
        </div>
        <div className='slide__content'>
          <div className='slide__title'>
            <p>
              Resourceful and human
            </p>
          </div>
          <div className='slide__text'>
            <p>
              Upstage Design has working with all types of clients. We know how to use what is infront of us and be respectful of poeple property and space.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyCards