import React from 'react'
import './Home.css'
function HomeReuse2({img,para}) {
  return (
    <div className='ReuseBody'>
    <div className='thirdColumn'>
        <div><img src={img} alt="" /></div>
        <div className='texts'>
        <span>Catch waves with <br /> adventure guide
    {para}
</span></div>
    </div></div>
  )
}

export default HomeReuse2