import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './Main'
import Nifty50 from './Nifty50'
import Niftynext50 from './Niftynext50'
import Nifty500 from './Nifty500'
import NiftyMidcap150 from './NiftyMidcap150'
import NiftyMidcap100 from './NiftyMidcap100'
import NiftyMidcap50 from './NiftyMidcap50'
import NiftySmallcap50 from './NiftySmallcap50'
import NiftySmallcap100 from './NiftySmallcap100'
import NiftySmallcap250 from './NiftySmallcap250'
import NiftyBank from './NiftyBank'
import NiftyIT from './NiftyIT'
import NiftyAuto from './NiftyAuto'
import NiftyFMCG from './NiftyFMCG'
import NiftyMetal from './NiftyMetal'
import NiftyInfra from './NiftyInfra'
import NiftyMedia from './NiftyMedia'
import NiftyPharma from './NiftyPharma'
import './Home.css'
import icon from '../Image/myicon.png'


const Home = () => {
  return (
    <div>
      <div className="navheader">
        <img src={icon} alt="" />
        <h1>Stock-O-Pedia</h1>
      </div>
      <div className="homeMainContainer">
        <div className="homeMainContainer20">
          <Navbar />
        </div>
        <div className="homeMainContainer80">
          <Routes >
            <Route path='/' element={<Main />} />
            <Route path='nifty50' element={<Nifty50 />} />
            <Route path='niftynext50' element={<Niftynext50 />} />
            <Route path='nifty500' element={<Nifty500 />} />
            <Route path='niftymidcap50' element={<NiftyMidcap50 />} />
            <Route path='niftymidcap100' element={<NiftyMidcap100 />} />
            <Route path='niftymidcap150' element={<NiftyMidcap150 />} />
            <Route path='niftysmallcap50' element={<NiftySmallcap50 />} />
            <Route path='niftysmallcap100' element={<NiftySmallcap100 />} />
            <Route path='niftysmallcap250' element={<NiftySmallcap250 />} />
            <Route path='/niftybank' element={<NiftyBank />} />
            <Route path='/niftyit' element={<NiftyIT />} />
            <Route path='/niftyauto' element={<NiftyAuto />} />
            <Route path='/niftyfmcg' element={<NiftyFMCG />} />
            <Route path='/niftymetal' element={<NiftyMetal />} />
            <Route path='/niftyinfra' element={<NiftyInfra />} />
            <Route path='/niftymedia' element={<NiftyMedia />} />
            <Route path='/niftypharma' element={<NiftyPharma />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default Home