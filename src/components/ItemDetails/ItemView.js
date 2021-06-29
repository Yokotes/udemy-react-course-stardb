import React from 'react'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>
        {item[field]}
      </span>
    </li>
  )
}

export {
  Record
}

export default function ItemView({
  data,
  img,
  children
}) {
  return (
    <>
      <div className="item-details-img-container">
        <img
          src={img}
          className="item-details-img"
          alt="Item details"
        />
      </div>
      <div className="item-details-info">
        <h3 className="item-details-name">
          {data.name}
        </h3>
        <ul className="item-details-list list-group">
          {children}
        </ul>
      </div>
    </>
  )
}
