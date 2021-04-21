import React, { Component } from 'react'

export default class ToggleColumns extends Component {
  onCheckboxClick = (e,column) => {
      this.props.onCheckboxClick(column,e.target.checked);
  }


  
  render() {
    return (
      <div className="toggle-columns">
        {/* Bind handlers and props */}
        { 
          Object.keys(this.props.columns).map((column, index) => {
            return ( 
            <div key={index}>
              <label>
                {column}
              </label>
              <input checked={this.props.columns[column]} onChange={(e)=>this.onCheckboxClick(e,column)}
                type="checkbox" />
            </div>)
          })
        }
      </div>
    );
  }
}
