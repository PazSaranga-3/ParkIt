import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Title from './components/Title';
import SignIn from './components/SignIn';
import SingUp from './components/SingUp';
import ChoosePark from './components/ChoosePark';
import History from './components/History';
import AllParking from './components/AllParking';
import LinkTab from './components/LinkTab';
import store from './store';

function App() {



  return (
    <div className="App" >
      <BrowserRouter>
      <Title/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signUp' element={<SingUp/>}/>
        <Route path='/choosePark' element={<ChoosePark/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/allParking' element={<AllParking/>}/>
      </Routes>
        <LinkTab/>
      </BrowserRouter>


    </div>
  );
}


export default App;




















// export default App;
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import Title from './components/Title';
// import Main from './components/Main';
// import StartParking from './components/StartParking';
// import AllParking from './components/AllParking';
// import History from './components/History';
// import SignUp from './components/SignUp';
// import Tab from './components/Tab';

// class User {

//   constructor(name, number, type, pass ) {

//     this.name = name
//     this.number =number
//     this.type = type
//     this.pass = pass

//   }

// }

// const user1 = new User ('paz','123456','mazda','1234')
// const user2 = new User ('or','4798','ford','5678')
// const user3 = new User ('mun','6887','pico','9090')


// function App() {

//   const [users, userArrChange] = useState([user1, user2, user3])


//   const addUser =(name, number, type, pass)=>{
//     let newTemp = new User(name, number, type, pass)
//     userArrChange([...users,newTemp])
    
//   }



//   return (
//     <div className="App" >
//       <BrowserRouter>
//         <Title />

//         <Routes>

//         <Route path='/' element={<Main userArr = {users}/>}/>
//         <Route path='/chooseParking' element={<StartParking/>}/>
//         <Route path='/allParking' element={<AllParking/>}/>
//         <Route path='/history' element={<History/>}/>
//         <Route path='/signUp' element={<SignUp add = {addUser}/>}/>


//         </Routes>

//         <Tab/>

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
