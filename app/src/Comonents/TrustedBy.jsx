import React from 'react'
import "../App.css"


function ClientCard({props}) {
    return (
      <div className='client__card'>
          <img className='client__img' src={props.img} atl={props.alt}/>
      </div>
    )
  }

function TrustedBy() {
    const clientImg = [{
        img: "ev-logo.png",
        alt: "engle volkers logo"
      }, {
        img: "mac-logo.jpg",
        alt: "macdonald realty"
      }, {
        img: "new-logo.jpg",
        alt: "newport reality"
      }]

  return (
    <div className="client__parent">
        <p style={{fontWeight: "600", fontSize: "18px", color: "black", marginBottom: "20px"}}>Trusted By</p>
            <div className="client__child">
            {clientImg.map((e) => {
                return (
                <ClientCard props={e} />
            )})}
        </div>
  </div>
  )
}

export default TrustedBy