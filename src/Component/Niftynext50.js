import React from 'react'
import Card from './Card'
import AllDetails from './AllDetails'
import './Nifty50.css'
import { useState, useEffect } from 'react'
import axios from "axios";

const Niftynext50 = () => {
  const [mainArray, SetMainarray] = useState()
  const [Array, Setarray] = useState()
  const [OverArray, SetOverarray] = useState()

  const options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {Indices: 'NIFTY NEXT 50'},
    headers: {
      'X-RapidAPI-Key': '24e9ae7ea2msh0b9d124aef19e9ap1e92fcjsn7d9ee288a56e',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.request(options).then(function (response) {
      SetMainarray(response.data)
      SetOverarray(response.data[0])
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(OverArray)

  return (
    <div className="indexContainer">
      <h2>Nifty Next 50</h2>
      <AllDetails 
       props={OverArray?OverArray:''}
      />
      <br />
      <div className="card-conatiner">
        <h3>Nifty Next 50 Companies</h3>
        <div className="underline"></div>
        <div className="cardWrapper">
        {
            mainArray?.map((item,index)=>{
              if(index==0){
                return 
              }
              else{
                return(
                  <Card
                    name={item.symbol}
                    pChange={item.pChange}
                    lastPrice={item.lastPrice}
                    change={item.change}
                  />
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Niftynext50