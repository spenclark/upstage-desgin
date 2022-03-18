import React from 'react'
import "../App.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="toolbar">
        <div>
          <img alt="Upstage Design" src="logo.png" className='logo'/>
        </div>
        <div className='call__btn'>
          <p className='contact'><span>Call</span>+1(250)208-2466</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar