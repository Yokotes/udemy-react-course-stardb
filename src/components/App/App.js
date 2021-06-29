import React, {Component} from 'react'
import './App.css'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PeoplePage from '../PeoplePage/PeoplePage'
import SwapiService from '../../services/SwapiService'

export default class App extends Component {

  // Services initialization
  swapiService = new SwapiService()

  // Render function
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}
