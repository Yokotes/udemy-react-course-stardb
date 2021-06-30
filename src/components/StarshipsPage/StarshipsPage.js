import React, { Component } from 'react'
import Row from '../Row/Row'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import { StarshipList } from '../SWComponents/lists'
import StarshipDetails from '../SWComponents/StarshipDetails'

export default class StarshipsPage extends Component {

  // Component state
  state = {
    selectedStarship: 9,
  }

  // onPlanetSelected
  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id
    })
  }

  // Render function
  render() {
    return (
      <ErrorBoundry>
        <Row
          left={
            <StarshipList
              onItemSelected={this.onStarshipSelected}
              renderItem={({name}) => `${name}`}
            />
          }
          right={
            <StarshipDetails
              itemId={this.state.selectedStarship}
            />
          }
        />
      </ErrorBoundry>
    )
  }
}
