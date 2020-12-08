import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => { drawChromeBoiAtCoords(event.clientX,event.clientY); }

  toggleCycle = () => { toggleCycling(); }
   
  keyPressFunction = (event) => { if(event.key === "a") {resize("+");} else if(event.key === "s") {resize("-");} }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.keyPressFunction}
        onClick={this.toggleCycle}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
