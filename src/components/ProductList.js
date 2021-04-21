import React, { Component } from 'react'

export default class ProductList extends Component {
  constructor(props){
    super(props);
    this.keys = Object.keys(this.props.columns);
    this.actualKeys =  this.keys.filter(x=>{
        return this.props.columns[x];
    })
  }

  

  getTheProduct = ()=>{
      console.log(this.props.products);
      return this.props.products.map((x,i)=>{
        return (<tr key={i}>
          {
            this.actualKeys.map((y,i)=>{
              return <td key={i}>{x[y]}</td>
            }) 
          } 
        </tr>)
    })
  }
  

  render() {
    this.keys = Object.keys(this.props.columns);
    this.actualKeys =  this.keys.filter(x=>{
      return this.props.columns[x];
    })
    return (
      <div id="product-list">
        <header>
          <strong>Product List ({this.props.products.length} items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              {this.actualKeys.map((x,i)=>{
                return <th key={i}>{x}</th>
              })}
            </tr>
          </thead>
          <tbody>
              {this.getTheProduct()}
          </tbody>
        </table>
      </div>
    )
  }
}
