
import './News.css'
import React, { useState } from 'react'
import './Resources.css'
const Resources = () => {
  const [myarticles, setmyarticles] = useState([]);
  const [headings, setheadings] = useState('');
  const [bodies, setbodies] = useState('');

  const heading = (values) => {
    setheadings(values)
    console.log("heading", headings)
  }
  const body = (values) => {
    setbodies(values)
  }
  const Submit = (values) => {
    const obj = {
      headings,
      bodies
    }
    setmyarticles([...myarticles, obj])
    // setheadings('')
  }
  console.log(myarticles)
  const deletex = (ind) => {
    const remarray = myarticles.filter((item, index) => {
      return index != ind
    })
    setmyarticles([...remarray])
    return remarray;
  }
  return (
    <div className="cont-res">
      <h1>WRITE A POST...</h1>
      <div className="input-box">
        <textarea className="heading-input" onChange={(e) => { heading(e.target.value) }} placeholder="Heading..." />
        <textarea className="main-input" onChange={(e) => { body(e.target.value) }} placeholder="Content..." />
        <button className='input-btn' onClick={() => Submit()}>SUBMIT</button>
      </div>
      <h1>ARTICLES</h1>
      <div className="resline"></div>
      <div className='inputwrapper'>
        {
          myarticles?.map((item, index) => {
            return (

              <div className="inpCard">
                <div className="inp20">
                  <h5>{item.headings.length > 60 ? `${item.headings.substring(0, 60)}...` : item.headings}</h5>
                </div>
                <div className="inp60">
                  <p>{item.bodies.length > 100 ? `${item.bodies.substring(0, 100)}...` : item.bodies  }  </p>
                </div>
                <div className="inp20f">
                  <button className='delete-btn' onClick={() => deletex(index)}>DELETE</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Resources

