import React, {useState} from 'react'
import { addUser } from '../actionCreator'
import { useNavigate } from 'react-router-dom'
import store from '../store'

let flag = false

export default function SingUp() {
  const [name,nameCh] = useState('')
  const [carNum,carNumCh] = useState('')
  const [carType,carTypeCh] = useState('')
  const [pass,passCh] = useState('')

  let nav = useNavigate()


  const nameError = () => {                                     //name validation
    flag = true
    let nameArry = name.split('')
    for(let i = 0 ; i < nameArry.length ; i ++){                  // all charcters form a-z
      let tempLetter = nameArry[i].charCodeAt()                     
      if(tempLetter < 97 || tempLetter > 122 ){
        flag = false;
        return <p>One of the letters are not small letter</p>
      }
    }
  }

   const carNumError = () => {                                //Car Number validation
    flag = true
    if(carNum.length > 8){
      flag = false
      return <p>the max letters is 8</p>
    }
   }

   const passError = () => {                                    //pass Validation
    if(pass == ""){
      return false
    }
    flag = true
    let leng = pass.length 
    let letterCount = 0 ;
    let capitalLetter = 0 ;
    let passArry = pass.split('')
    for(let i = 0 ; i < passArry.length ; i ++){
      let tempLetter = passArry[i].charCodeAt()
      if(tempLetter >= 65 & tempLetter <= 90 ){       // A-Z
        capitalLetter++
      }
      if (tempLetter >= 33 & tempLetter <= 64){        //special cahrts
        letterCount++
      }
      if (tempLetter >= 91 & tempLetter <= 96){
        letterCount++
      }
      if (tempLetter >= 123 & tempLetter <= 126){
        letterCount++
      }
    }
    if(letterCount == 0 || capitalLetter ==0){
      flag = false
      return <p>follow the guid. only from 4-8 letters with one capital and one special</p>
    }
    if(leng > 8 || leng < 4){
      flag = false
      return <p>follow the guid. only from 4-8 letters with one capital and one special</p>
    }
   }


  const addFlagUser = () => {
    if(flag && name !="" && carNum !="" && carType != "" && pass != ""){
      addUser(name,carType,carNum,pass)
      nav('/choosePark')
      // console.log(store.getState().reducerUser);
    }
    else{
      alert('please fill all the lines correctly')
    }
  }


  return (
    <div>
      <input type="text" onChange={(e)=>{nameCh(e.target.value)}} placeholder='User Name'/>
        {nameError()}
      <input type="text" onChange={(e)=>{carNumCh(e.target.value)}} placeholder='Car Number'/>
      {carNumError()}
      <input type="text" onChange={(e)=>{carTypeCh(e.target.value)}} placeholder='Car type'/>
      <input type="text" onChange={(e)=>{passCh(e.target.value)}} placeholder='Password'/>
      {passError()}
      <button onClick={addFlagUser}>Register</button>
    </div>
  )
}
