import store from "./store"


export default function reducerUser(state = {}, action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'logIn' :
      return action.payload

    case 'startPark' :
       return action.payload

      default : 
      return state

    }
}