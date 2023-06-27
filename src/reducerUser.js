import store from "./store"


export default function reducerUser(state = {}, action){ //state = [], action = { type, payload }
  let newState ={}
  switch(action.type){
    case 'logIn' :
      newState = action.payload
      return newState

    case 'startPark' :
      newState = {                                                                        
        ...state,
        parkHistory: [...state.parkHistory, action.payload],
        parkFlag: true,
      };
      return newState;


    default : 
      return state

    }
}