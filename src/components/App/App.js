import React, {Component} from 'react'
import './App.css'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PeoplePage from '../PeoplePage/PeoplePage'
import SwapiService from '../../services/SwapiService'
import { SwapiServiceProvider } from '../../context/swapiServiceContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PlanetsPage from '../PlanetsPage/PlanetsPage'
import StarshipsPage from '../StarshipsPage/StarshipsPage'

export default class App extends Component {

  // Services initialization
  swapiService = new SwapiService()

  // Render function
  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="container">
            <Header />
            <RandomPlanet />

            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />

          </div>
        </Router>
      </SwapiServiceProvider>
    )
  }
}
