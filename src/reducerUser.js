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

      case 'pay' :
        newState = {
          ...state,
          parkFlag : false,
        };
        return newState;

      case 'restor' :
        let tempVal = state.parkHistory[action.payload]
        newState = {
          ...state,
          parkFlag : true , 
          currentParkingIndex : action.payload,
          parkHistory : [...state.parkHistory,tempVal]
        }
        return newState;

      case 'removAupdate' :
        return {};

    default : 
      return state

    }
}