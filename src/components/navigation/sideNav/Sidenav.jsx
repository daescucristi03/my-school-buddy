import React from 'react'
import { useStatevalue } from '../../stateProvider/StateProvider'

import './Sidenav.css'

function Sidenav() {
    const [{navState}, dispatch] = useStatevalue();

  return (
    <div className={'sidenav ' + navState}>
      <h1 className='sidenav__item'>test</h1>
    </div>
  )
}

export default Sidenav
