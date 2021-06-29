import React, { Component } from 'react'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import Row from '../Row/Row'
import { PersonList } from '../SWComponents/lists'
import { PersonDetails } from '../SWComponents/details'

export default class PeoplePage extends Component {

  // Component state
  state = {
    selectedPerson: 1,
  }

  // onPersonSelected function
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  // Render function
  render() {
    return (
      <ErrorBoundry>
        <Row
          left={
            <PersonList
              onItemSelected={this.onPersonSelected}
              renderItem={({name, gender, birthYear}) => `${name} (${gender}), ${birthYear}`}
            />
          }
          right={
            <PersonDetails
              itemId={this.state.selectedPerson}
            />
          }
        />
      </ErrorBoundry>
    )
  }
}
