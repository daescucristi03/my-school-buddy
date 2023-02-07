import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import './Topnav.css'
import { useStatevalue } from '../../stateProvider/StateProvider';

function Topnav() {
    const [{navState}, dispatch] = useStatevalue();

    const handleOnClick = () => {
        dispatch({
            type: 'TOGGLE_NAV_STATE'
        });
    }

  return (
    <div className='topnav'>
      <button className='topnav__item' onClick={handleOnClick}>
        <MenuIcon/>
        <p>Menu</p>
      </button>

      <button className='topnav__item'>
        <p>Account</p>
        <PersonIcon/>
      </button>
    </div>
  )
}

export default Topnav
