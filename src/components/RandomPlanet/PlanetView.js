import React from 'react'

export default function PlanetView({planet}) {
  const {
    id,
    name,
    population,
    rotationPeriod,
    diameter
  } = planet;

  return (
    <>
    <img
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      className="random-planet-img"
      alt="Random planet"
    />
    <div className="random-planet-info">
      <h3 className="random-planet-name">
        {name}
      </h3>
      <ul className="random-planet-list list-group">
      <li className="list-group-item">
          <span className="term">Population</span>
          <span>
            {population}
          </span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>
            {rotationPeriod}
          </span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>
            {diameter}
          </span>
        </li>
      </ul>
    </div>
    </>
  )
}
