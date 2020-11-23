import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let xCord = event.clientX
    let yCord = event.clientY 
    return (drawChromeBoiAtCoords(xCord, yCord))
  }
  

  toggleCycling = ()=>{
    return (toggleCycling())
  }
   
    
    
    resize = (event) => {
      this.add = "+"
      this.subtract =  "-"

      if(event.key === "a"){
        return (resize(this.add))
      } else if (event.key === "s"){
        return (resize(this.subtract))
      } 
  }
   


  
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycling}
        onKeyPress={this.resize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
