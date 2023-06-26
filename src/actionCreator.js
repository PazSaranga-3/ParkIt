import store from "./store";

class CityClass {
  constructor(city,price){
    this.city = city ;
    this.price = price

  }
}

const RH = new CityClass('Rehuvot',50)
const NT = new CityClass('Natnia',100)
const TLV = new CityClass('Tel Aviv',150)


export const addUser = (name, carType, carNum, pass) => {            // adding user throug the sign Up and updateting both stats

  store.dispatch({
    type: 'addUser', payload: {
      name,
      pass,
      carNum,
      carType,
      parkFlag: false,
      parkHistory: []
    }
  })

  store.dispatch({ type: 'logIn', payload: {
    name,
    pass,
    carNum,
    carType,
    parkFlag: false,
    parkHistory: []

  } })
}



export const loginMe = (user,pass) => {                                                     // login in
  let arryTemp = store.getState().reducerUsersArry
  let userTemp = arryTemp.findIndex((obj) => obj.name === user && obj.pass === pass)
  if(userTemp == -1){
    return alert('user not found')
  }
  else{
    store.dispatch({type : 'logIn' , payload : arryTemp[userTemp]})
    return true
  }
}

export const startPark = (city) => {
 let user = store.getState().reducerUser
 if (user.parkFlag){
  return alert('you are already in a parking mode, please finish your parking first')
 }
 else{
  user.parkFlag = true
  if(city == 'TLV'){
    user.parkHistory.push(TLV)
  }
  else if(city == 'NT'){
    user.parkHistory.push(NT)
  }
  else if(city == 'RH'){
    user.parkHistory.push(RH)
  }
  store.dispatch({type : 'startPark', payload : user})
  return true
 }
}