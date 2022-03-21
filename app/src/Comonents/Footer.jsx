import React from 'react'
import "../App.css"

function Footer() {
  return (
    <>
    <div className='footerDiv'>
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
              <img src="csp_logo.png" style={{width: "60px", height: "60px"}}/>
              <p style={{color: "black", fontSize: "14px", fontWeight: "600", padding: "10px 0 0"}}>cynthia@upstagedesign.ca</p>
              <p style={{color: "black", fontSize: "14px", fontWeight: "600", padding: "4px 0 10px 0"}}>+1(250)208-2466</p>
              <p style={{color: "#313131", fontSize: "14px", fontWeight: "500", padding: " 0"}}>Victoria, BC</p>
        </div>
        <div className="trademark">
            <span style={{paddingRight: "2px", textAlign: "center"}}>
            ©
            </span>Upstage
        </div>
    </div>
    </>
  )
}

export default Footer