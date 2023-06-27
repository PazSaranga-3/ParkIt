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
      parkFlag: false,                        //Cant put bollian
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
  console.log(store.getState().reducerUser);
 let user = store.getState().reducerUser
 if (user.parkFlag){
  return alert('you are already in a parking mode, please finish your parking first')
 }
 else{
  if(city == 'TLV'){
   store.dispatch({type : 'startPark', payload : TLV})
  }
  else if(city == 'NT'){
   store.dispatch({type : 'startPark', payload : NT})
  }
  else if(city == 'RH'){
   store.dispatch({type : 'startPark', payload : RH})
  }
  console.log(store.getState().reducerUser);
  return true
 }
}