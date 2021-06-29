import React from 'react'

export default function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <h4 className="error-title">
        Something went wrong!
      </h4>
      <p>
        Couldn't load component data
      </p>
    </div>
  )
}