import {configureStore} from '@reduxjs/toolkit'
import reducerUsersArry from './reducerUsersArry'
import reducerUser from './reducerUser'


const reducer = {reducerUsersArry,reducerUser}
const store = configureStore({reducer})

export default store;