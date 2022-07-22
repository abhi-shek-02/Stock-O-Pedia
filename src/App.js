// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";
// import {useState,useEffect} from 'react'

// function App() {
//   const [data,setData]=useState()
//   useEffect(()=>{
//     axios.request(options).then(function (response) {
//       console.log(response.data);
//       setData(response.data)
//     }).catch(function (error) {
//       console.error(error);
//     });
//   },[])
//   const options = {
//     method: 'GET',
//     url: 'https://latest-stock-price.p.rapidapi.com/price',
//     params: {Indices: 'NIFTY 50'},
//     headers: {
//       'X-RapidAPI-Key': '24e9ae7ea2msh0b9d124aef19e9ap1e92fcjsn7d9ee288a56e',
//       'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
//     }
//   };
//   // https://rapidapi.com/twelvedata/api/twelve-data1/
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    </div>
  )
}

export default App
