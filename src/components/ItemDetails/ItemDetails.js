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
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
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

  // Update item function
  updateItem = () => {
    const {itemId, getData} = this.props

    if (!itemId)
      return;

    this.setState({
      loading: true
    })

    getData(itemId)
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
