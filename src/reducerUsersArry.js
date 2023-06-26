import store from "./store"


export default function reducerUsersArry(state = [], action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'addUser' :
      return [...state, action.payload]

    
      
      default : 
      return state
      
    }
}