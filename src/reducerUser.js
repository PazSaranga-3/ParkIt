import store from "./store"


export default function reducerUser(state = {}, action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'logIn' :
      let newState = action.payload
      return newState

    case 'startPark' :
       newState = action.payload
      return newState


    default : 
      return state

    }
}