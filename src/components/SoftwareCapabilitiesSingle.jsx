import React from 'react'

const SoftwareCapabilitiesSingle = ({icon, heading}) => {
  return (
   <div className='scs-cards'>
    <div className='scs-card'>
      {icon}
      <h2>
        {heading}
      </h2>
    </div>
    
   </div>
  )
}

export default SoftwareCapabilitiesSingle
