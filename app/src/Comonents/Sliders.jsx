import React from 'react'
import Carosel from './Carosel'
// https://blog.remax.ca/do-staged-homes-sell-faster/
function Sliders() {
  return (
    <div>
       <div>
        <h4>
          Recent Work
        </h4>
      </div>
      <div>
        {/* photodiv */}
        <Carosel />
      </div>
    </div>
  )
}

export default Sliders