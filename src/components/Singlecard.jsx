import '../css/Singlecard.css'
import React from 'react'


const Singlecard = ({path,title,description}) => {
  return (
    <div>
      <div className="card">
  <div className="header">
    <img src={path}/>
  </div>

  <h3 >{title}</h3>

  <p className="message">
  {description}
  </p>
  
</div>

    </div>
  )
}

export default Singlecard
