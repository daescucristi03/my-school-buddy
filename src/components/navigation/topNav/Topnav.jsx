import React from 'react'

import './Topnav.css'

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

function Topnav() {
  return (
    // topnav container | horizontal container
    <div className='topnav horizontal__container'>
        {/* sidenav menu toggle button | horizontal cotnainer (display icon and text inline) | nav filled button */}
        <button className='topnav__item btn__navFill horizontal__container'>
            <MenuIcon/>
            <p>Menu</p>
        </button>

        {/* go to profile / login page button | horizontal cotnainer (display icon and text inline) | nav filled button */}
        <button className='topnav__item btn__navFill horizontal__container'>
            <p>Profile</p>
            <PersonIcon/>
        </button>
    </div>
  )
}

export default Topnav