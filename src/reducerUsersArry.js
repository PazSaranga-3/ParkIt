import store from "./store"


export default function reducerUsersArry(state = [], action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'addUser' :
      return [...state, action.payload]

      case 'removAupdate' :
        let newState = [...state]
        let i = newState.findIndex(obj => obj.carNum == action.payload.carNum)
        newState.splice(i,1)
        newState.push(action.payload)
        return newState

      
      default : 
      return state
      
    }
}