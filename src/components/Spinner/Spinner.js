import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
