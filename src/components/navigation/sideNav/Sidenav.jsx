import React, { useEffect } from 'react'
import { useStatevalue } from '../../stateProvider/StateProvider'

import './Sidenav.css'

function Sidenav() {
  const [{navState} , dispatch] = useStatevalue();

  return (
    <div className={navState}>
      <div className='sidenav vertical__container'>
        <button className='sidenav__item btn__navEmpty horizontal__container'>
              <p>Sign out</p>
          </button>
      </div>
    </div>
  )
}

export default Sidenav
