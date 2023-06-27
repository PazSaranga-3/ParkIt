import React from 'react'
import { Link } from 'react-router-dom'
import {removAupdate} from '../actionCreator'
export default function LinkTab() {

  


  return (
    <div>
      
      <Link to='/allParking'><button>All Parking</button></Link>
      <Link to='/choosePark'><button>Parking</button></Link>
      <Link to='/history'><button>History</button></Link>
      <Link to='/'><button onClick={removAupdate}>Exit</button></Link>
    </div>
  )
}
