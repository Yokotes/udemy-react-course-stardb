import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        StarDB
      </div>
      <nav className="header-menu">
        <ul>
          <li><a href="/">People</a></li>
          <li><a href="/">Planets</a></li>
          <li><a href="/">Starships</a></li>
        </ul>
      </nav>
    </div>
  )
}
