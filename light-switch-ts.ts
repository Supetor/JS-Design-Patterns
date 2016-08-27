interface IStateOfMachine{
  name: string
  lightSwitch: LightSwitch
  turnOn(): string
  turnOff(): string
  getState(): string
}

class LightSwitch {
  lightOn: LightOnState
  lightOff: LightOffState
  state: IStateOfMachine
  constructor(){
    this.lightOn = new LightOnState(this)
    this.lightOff = new LightOffState(this)
  }
  getState(): string {return this.state.getState()}
  setState(newState: IStateOfMachine): void {this.state = newState}
  turnOff(): string {return this.state.turnOff()}
  turnOn(): string {return this.state.turnOn()}
  getLightOnState():IStateOfMachine {return this.lightOn}
  getLightOffState():IStateOfMachine {return this.lightOff}
}

class LightOnState implements IStateOfMachine {
  lightSwitch: LightSwitch
  name: string
  constructor(newSwitch:LightSwitch){
    this.lightSwitch = newSwitch
    this.name = 'LightOnState'
  }
  getState():string {return this.name}
  turnOn():string {return 'Sorry the light is already on.'}
  turnOff():string {
    this.lightSwitch.setState(this.lightSwitch.getLightOffState())
    return 'Light is now off.'
  }
}

class LightOffState implements IStateOfMachine {
  lightSwitch: LightSwitch
  name: string
  constructor(newSwitch:LightSwitch){
    this.lightSwitch = newSwitch
    this.name = 'LightOffState'
  }
  getState():string {return this.name}
  turnOn():string {
    this.lightSwitch.setState(this.lightSwitch.getLightOnState())
    return 'Light is now on.'
  }
  turnOff():string {return 'Sorry, light is already off.'}
}

let lightSwitch: LightSwitch = new LightSwitch()

lightSwitch.setState(lightSwitch.getLightOnState())

console.log(lightSwitch.getState())

console.log(lightSwitch.turnOff())

console.log(lightSwitch.getState())

console.log(lightSwitch.turnOn())

console.log(lightSwitch.getState())