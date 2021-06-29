import React from 'react'
import './ItemList.css'

const ItemList = (props) =>  {
  const { data } = props;

  const items = data.map((item) => {
    const label = props.renderItem(item);
    return (
      <li
        key={item.id}
        onClick={() => props.onItemSelected(item.id)}
        className="list-group-item"
      >
        {label}
      </li>
    )
  })

  return (
    <div className="item-list card">
      <ul className="list-group">
        {items}
      </ul>
  </div>
  )
}

export default ItemList