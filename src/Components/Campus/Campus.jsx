import React from 'react'
import "./Campus.css"
import pic_1 from "../../assets/gallery-1.png"
import pic_2 from "../../assets/gallery-2.png"
import pic_3 from "../../assets/gallery-3.png"
import pic_4 from "../../assets/gallery-4.png"
import white_arrow from "../../assets/white-arrow.png"




const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={pic_1} alt="" />
        <img src={pic_2} alt="" />
        <img src={pic_3} alt="" />
        <img src={pic_4} alt="" />
      </div>
      <button className='btn1'>See more here  <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
