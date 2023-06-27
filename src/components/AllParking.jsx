import React from 'react'
import store from '../store'
import { pay } from '../actionCreator';
import { useNavigate } from 'react-router-dom';


export default function AllParking() {
  let state = store.getState().reducerUser
  let nav = useNavigate()

  console.log(state);

 const payAndGo = () =>{
  pay ()
  nav('/history')
  console.log(store.getState().reducerUser)
 }

  const showDiv  = () => {
    if (state.parkFlag == true){
    return <div>
      <p>{state.carType}</p>
        <p>{state.carNum}</p>
        <p>{state.parkHistory[state.currentParkingIndex].city}</p>
        <p>{state.parkHistory[state.currentParkingIndex].price}</p>
        <button onClick={payAndGo}>PAY</button>
    </div>
    }
    else{
      <p>no open parking</p>
    }
  }

  return (
    <div>
      {showDiv()}
    </div>
  )
}
