import React from 'react'
import { SwapiServiceConsumer } from '../context/swapiServiceContext'

const attachConsumer = (View, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const swapiServiceProps = mapMethodsToProps(swapiService);
            return (
              <View
                {...props}
                {...swapiServiceProps}
              />
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
}

export default attachConsumer
