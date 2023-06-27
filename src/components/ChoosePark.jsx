import React, { useState } from 'react'
import store from '../store'
import { startPark } from '../actionCreator'
import { useNavigate } from 'react-router-dom'

export default function ChoosePark() {
  const [selectOp,selectOpCh] = useState()

  const nav  = useNavigate()
  let user = store.getState().reducerUser
  return (
    <div>
      <select name="city" id="city" onChange={(e)=>{selectOpCh(e.target.value)}} >
        <option disabled selected value="nan" >City</option>
        <option value="TLV">Tel Aviv</option>
        <option value="NT">Natania</option>
        <option value="RH">Rehuvot</option>
      </select>
      <p>{user.carNum}</p>
      <button onClick={()=>{if(startPark(selectOp)){nav('/allParking'); alert('you have start parking')}}}>Start Parking</button>
    </div>
  )
}
