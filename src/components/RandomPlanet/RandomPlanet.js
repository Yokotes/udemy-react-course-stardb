import React, {Component} from 'react'
import SwapiService from '../../services/SwapiService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spinner from '../Spinner/Spinner';
import PlanetView from './PlanetView';
import './RandomPlanet.css'

export default class RandomPlanet extends Component {

  //  Services initialization
  swapiService = new SwapiService()

  // Component state
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  // Lyfecicle methods
  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 1500);
  }

  //  onPlanetLoad function
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  // onError function
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  // Update planet
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 2
    this.swapiService.getPlanetById(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  }

  // Render function
  render() {
    const {
      planet,
      loading,
      error
    } = this.state;

    const hasData = !(loading || error)

    const errorIndicator = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner/> : null
    const content  = hasData ? <PlanetView planet={planet}/> : null

    return (
      <div className="random-planet card">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    )
  }
}