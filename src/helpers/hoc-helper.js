import React, {Component} from 'react'
import Spinner from '../components/Spinner/Spinner';

const withData = (View, getData) => {
  return class extends Component {
    // Component state
    state = {
      data: null
    }

    // Lifecicle methods
    componentDidMount() {
      getData()
      .then((data) => this.setState({data}))
    }

    // Render function
    render() {
      const {data} = this.state;

      if (!data) {
        return <Spinner />
      }
      return (
        <View
          {...this.props}
          data={data}
        />
      )
    }
  }
}

export default withData