import React from 'react';
import '../CustomEstimation.css'

function EstimatedListInfo({label, amount}) {
  return (
    <div className='estimated-info-container'>
        <p className="estimated-text-1">{label}</p>
        <p className="estimated-text-2">{amount}</p>
    </div>
  )
}

export default EstimatedListInfo