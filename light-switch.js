"use strict"

class LightSwitch{
  constructor(){
    this.lightOn = new lightOnState(this)
    this.lightOff = new lightOffState(this)
    this.state
  }
  getState(){return this.state.getState()}
  setState(newState){this.state = newState}
  turnOff(){return this.state.turnOff()}
  turnOn(){return this.state.turnOn()}
  getLightOnState(){return this.lightOn}
  getLightOffState(){return this.lightOff}
}

class lightOnState{
  constructor(newLightSwitch){
    this.lightSwitch = newLightSwitch
    this.name = 'lightOnState'
  }
  getState(){return this.name}
  turnOn(){return 'Sorry, the light is already on.'}
  turnOff(){
    lightSwitch.setState(lightSwitch.getLightOffState())
    return 'Light is now off.'
  }
}

class lightOffState{
  constructor(newLightSwitch){
    this.lightSwitch = newLightSwitch
    this.name = 'lightOffState'
  }
  getState(){return this.name}
  turnOn(){
    lightSwitch.setState(lightSwitch.getLightOnState())
    return 'Light is now on.'
  }
  turnOff(){return 'Sorry, the light is already off.'}
}

let lightSwitch = new LightSwitch()

lightSwitch.setState(lightSwitch.getLightOnState())

console.log(lightSwitch.getState())

console.log(lightSwitch.turnOff())

console.log(lightSwitch.getState())

console.log(lightSwitch.turnOn())

console.log(lightSwitch.getState())