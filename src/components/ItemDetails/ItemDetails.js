import React, { Component } from 'react'
import Spinner from '../Spinner/Spinner';
import './ItemDetails.css'
import ItemView from './ItemView';

export default class ItemDetails extends Component {

  //  Component state
  state = {
    data: {},
    img: null,
    loading: true,
  }

  // Lyfecicle methods
  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updatePerson();
    }
  }

  // onPersonLoaded function
  onItemLoaded = (data) => {
    this.setState({
      data,
      loading: false,
      img: this.props.getImageUrl(data)
    })
  }

  // Update person function
  updatePerson = () => {
    const {id, getData} = this.props

    if (!id)
      return;

    this.setState({
      loading: true
    })

    getData(id)
    .then(this.onItemLoaded)
  }

  // Render function
  render() {
    const {
      data,
      loading,
      img,
    } = this.state;

    const {children} = this.props;

    const spinner = loading ? <Spinner /> : null
    const content = !loading ? (
      <ItemView
        data={data}
        img={img}
      >
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { item: data })
          })
        }
      </ItemView>
    ) : null

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
}
