import React from 'react'
import "../App.css"

function Footer() {
  return (
    <div className='footerDiv'>
        <div>
      
          <div>
            <p></p>
            <div>
              <img src="csp_logo.png" style={{width: "20px", height: "20px"}}/>
            </div>
          </div>
        </div>
        <div className="trademark">
        <span style={{paddingRight: "2px"}}>
        ©
        </span>Upstage
        </div>
    {/* Victoria BC */}
        {/* <div className="dividerRoundel">
          
        </div>
        
        <div className="email">
          cynthia@upstagedesign.ca
        </div> */}
    </div>
  )
}

export default Footer