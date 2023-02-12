import React from 'react'
import { NavLink } from 'react-router-dom'

import './Bollywoood/Bollywood.css'

import HomeReuse from './Home/HomeReuse'
import HomeReuse1 from './Home/HomeReuse1'
import HomeReuse2 from './Home/HomeReuse2'
import HomeReuse3 from './Home/HomeReuse3'
import Home from './Navbar'

function Bollywood() {
  return (
    <div className=''>
         <Home />
<div>
    <span className='taskHeading'> Bollywood</span>

    <div className='secondArticle'>
    <div className='columnFlex'>
    <NavLink to='/react'> 
    <HomeReuse className='bollywoodColumn1' img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    </NavLink>
    <NavLink to='/react'> 
    <HomeReuse className='bollywoodColumn1' img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    </NavLink>
    <NavLink to='/react'> 
    <HomeReuse className='bollywoodColumn1' img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    </NavLink>
        <HomeReuse3  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    
    </div>
    <div>
    
    <span className='taskHead'>Top Posts</span>
    <HomeReuse1  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    {/* <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' /> */}
    <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' />
    
   
    <div className='advertise'>Advertisement</div>
    </div>
    </div>
  </div> <hr style={{width:'75%',marginTop:'3rem',marginBottom:'3rem'}} />
    </div>
  )
}

export default Bollywood