import React from 'react'

import './Topnav.css'

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useStatevalue } from '../../stateProvider/StateProvider';

function Topnav() {
  const [{navState}, dispatch] = useStatevalue();

  const toggleSideNav = () => {
    dispatch({
      type: 'TOGGLE_NAV_STATE'
    });
  }

  return (
    // topnav container | horizontal container
    <div className='topnav horizontal__container'>
        {/* sidenav menu toggle button | horizontal cotnainer (display icon and text inline) | nav filled button */}
        <button className='topnav__item btn__navEmpty horizontal__container' onClick={toggleSideNav}>
            <MenuIcon/>
            <p>Menu</p>
        </button>

        {/* go to profile / login page button | horizontal cotnainer (display icon and text inline) | nav filled button */}
        <button className='topnav__item btn__navEmpty horizontal__container'>
            <p>Profile</p>
            <PersonIcon/>
        </button>
    </div>
  )
}

export default Topnav