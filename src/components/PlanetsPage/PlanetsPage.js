import React, { Component } from 'react'
import Row from '../Row/Row'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import { PlanetList } from '../SWComponents/lists'
import PlanetDetails from '../SWComponents/PlanetDetails'

export default class PlanetsPage extends Component {

  // Component state
  state = {
    selectedPlanet: 1,
  }

  // onPlanetSelected
  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    })
  }

  // Render function
  render() {
    return (
      <ErrorBoundry>
        <Row
          left={
            <PlanetList
              onItemSelected={this.onPlanetSelected}
              renderItem={({name}) => `${name}`}
            />
          }
          right={
            <PlanetDetails
              itemId={this.state.selectedPlanet}
            />
          }
        />
      </ErrorBoundry>
    )
  }
}
