import React from 'react'
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
import './Main.css'
const Main = () => {
  return (
    <div className="maincompcont">
      <Nifty50 />
      {/* <Niftynext50 />
      <Nifty500 />
      <NiftyMidcap50 />
      <NiftyMidcap100 />
      <NiftyMidcap150 />
      <NiftySmallcap50 />
      <NiftySmallcap100 />
      <NiftySmallcap250 />
      <NiftyBank />
      <NiftyIT />
      <NiftyAuto />
      <NiftyFMCG />
      <NiftyMetal />
      <NiftyInfra />
      <NiftyMedia />
      <NiftyPharma /> */}
    </div>
  )
}

export default Main
