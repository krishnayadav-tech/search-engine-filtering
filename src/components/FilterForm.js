import React, { Component } from 'react'

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
      this.props.onPriceInputChange(e.target.name,e.target.value);
  }

  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          value={this.props.priceFrom}
          onChange={this.onPriceInputChange}
          type="number"
          name="priceFrom"
          placeholder="Price from..." />
        <input
          onChange={this.onPriceInputChange}
          type="number"
          name="priceTo"
          placeholder="Price to..." />
      </div>
    )
  }
}
