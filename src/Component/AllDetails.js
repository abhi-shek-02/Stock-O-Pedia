import React from 'react'
import './AllDetails.css'
import millify from 'millify'
const AllDetails = ({ props }) => {
  // console.log(value)
  // console.log(props.change)
  // console.log(value.identifier)
  const { change, pChange, open, previousClose, dayLow, dayHigh, yearLow, yearHigh, perChange30d, perChange365d, lastUpdateTime, totalTradedVolume } = props
  console.log(change)
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }
  return (
    <div className="alldetailsmainconat">
      {/* <h3>OVERVIEW</h3> */}
      <div className="rows">
        {/* row1 */}
        <div className="Alldetails-cards">
          <h1 >{pChange}</h1>
          <p>% Change</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{open}</h2>
          <p>Open</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{previousClose}</h2>
          <p>Previous Close</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{nFormatter(change, 5)}</h2>
          <p>Change Price</p>
        </div>
      </div>
      <div className="rows">
        {/* row3 */}
        <div className="Alldetails-cards">
          <h2>{dayLow}</h2>
          <p>Day Low</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{dayHigh}</h2>
          <p>Day High</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{yearLow}</h2>
          <p>Year Low</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{yearHigh}</h2>
          <p>Year High</p>
        </div>
      </div>
      <div className="rows">
        {/* row3 */}
        <div className="Alldetails-cards">
          <h2>{perChange30d}</h2>
          <p>% Change 30 Days</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{perChange365d}</h2>
          <p>% Change 365 Days</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{nFormatter(totalTradedVolume, 1)}</h2>
          <p>Total Traded Volume</p>
        </div>
        <div className="Alldetails-cards">
          <h2>{lastUpdateTime?.slice(1, 11)}</h2>
          <p>Last Updated Time</p>
        </div>
      </div>
    </div>
  )
}

export default AllDetails
