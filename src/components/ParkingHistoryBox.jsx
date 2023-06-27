import React from 'react'
import store from '../store'
import { restorAction } from '../actionCreator'


export default function ParkingHistoryBox(props) {
  let state = store.getState().reducerUser

  const restorPark = () =>{
    if (state.parkFlag){
      return alert ('there is already open parking, pay first')
    }
    else{
     restorAction(props.i)
    }
  }

  return (
    <div>
        <p>Car : {state.carType}</p>
        <p>Number : {state.carNum}</p>
        <p>Cost: {props.cost}</p>
        <button onClick = {restorPark}>restor</button>
    </div>
  )
}
