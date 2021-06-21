import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  onPriceInputChange = (name, value) => {
      if(name === "priceFrom"){
        this.setState(oldstate=>{
          return{
            ...oldstate,
            priceFrom : value
          }
        })
      }else{
        this.setState(oldstate=>{
          return{
            ...oldstate,
            priceTo : value
          }
        })
      }
  }

  filterProducts = () => {
    let displayedProducts = this.props.products;
    if(this.state.priceFrom && this.state.priceTo){
      let from = parseFloat(this.state.priceFrom);
      let to = parseFloat(this.state.priceTo);
      displayedProducts = displayedProducts.filter((x)=>{
        if(x.price >= from && x.price <=to){
          return true;
        }
        return false;
      })
    }
    return displayedProducts;
  }

  onCheckboxClick = (name, checked) => {
    this.setState(oldstate=>{
      let tempstate =  {
        ...oldstate,
        columns: {
          ...oldstate.columns,
          [name] : checked
        }
      }
      return tempstate;
    })
  }

  render() {
    
    
    
    return (
      <div className="Products">
        <FilterForm
          priceFrom={this.state.priceFrom}
          priceTo={this.state.priceTo}
          onPriceInputChange={this.onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={this.onCheckboxClick}
          columns={this.state.columns} />

        <ProductList
          products={this.filterProducts()}
          columns={this.state.columns} />
      </div>
    );
  }
}
