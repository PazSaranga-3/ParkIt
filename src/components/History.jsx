import React from 'react'
import store from '../store'
import ParkingHistoryBox from './ParkingHistoryBox'

export default function History() {
  let state = store.getState().reducerUser

  const showParks = () => {
    console.log(state);
    if(Object.keys(state).length !== 0){
    return state.parkHistory.map((val,index)=>{

      return <ParkingHistoryBox cost = {val.price} i = {index}/>

    })}

  }


  return (
    <div>
        {showParks()}    
    </div>
  )
}
