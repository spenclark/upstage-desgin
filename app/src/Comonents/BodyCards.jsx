import React from 'react'
// https://blog.remax.ca/do-staged-homes-sell-faster/

// 1 why stage
// 2 what we do
// 3 easy and understand

const data = [{
  title: "How it works",
  text: "",
  photos: ["","",""],
},{
  title: "How we help",
  text: "",
  photos: ["","",""],
},{
  title: "Simple",
  text: "",
  photos: ["","",""],
}]

function transitonPhoto() {

}

function Card() {

}



function BodyCards() {
  return (
    <div>
      <div>
        {data.map((e) => {
          return (
            <div>
              <div>
                {e.title}
              </div>
              <div>
                <div>
                  {e.photos.map((e) => {

                  })}
                </div>
                <div>

                </div>
              </div>
  
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BodyCards