import React from 'react'
import './Home.css'
function HomeReuse({img,para}) {
  return (
    <div className='ReuseBody'>
    <div className='firstColumn'>
        <div><img src={img} alt="" /></div>
        <div>
        <span>Hello guys this our first Reusable Component
    {para}
</span></div>
    </div></div>
  )
}

export default HomeReuse