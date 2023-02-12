import React from 'react'
import './Home.css'
function HomeReuse1({img,para}) {
  return (
    <div className='ReuseBody'>
    <div className='secondColumn'>
        <div><img src={img} alt="" /></div>
        <div>
        <span>Hello guys this our second Reusable Component
    {para}
</span></div>
    </div></div>
  )
}

export default HomeReuse1