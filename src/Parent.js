import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: "#FFF"
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor(),
      childColor: getRandomColor()
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child parentColorChange = {this.changeColor} color = {this.state.childColor} childrenColorChange = {this.changeColor} />
        <Child parentColorChange = {this.changeColor} color = {this.state.childColor} childrenColorChange = {this.changeColor} />

      </div>
    )
  }
}

export default Parent
