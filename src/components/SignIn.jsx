import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { loginMe } from '../actionCreator'

export default function SignIn() {
  const [user,userHook] = useState('')
  const [pass,passHook] = useState('')

  const nav = useNavigate()

  const movTo = () => {
    nav ('/signUp')
  }

  return (
    <div>
      <input type="text" onChange={(e)=>{userHook(e.target.value)}}/>
      <input type="text" onChange={(e)=>{passHook(e.target.value)}}/>

      <button onClick={()=>{if(loginMe(user,pass)){nav('/choosePark')}}}>Sign In</button>
      <button onClick={movTo}>Sing Up</button>



    </div>
  )
}
