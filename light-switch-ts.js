"use strict"

class LightSwitch {
    constructor() {
        this.lightOn = new LightOnState(this);
        this.lightOff = new LightOffState(this);
    }
    getState() { return this.state.getState(); }
    setState(newState) { this.state = newState; }
    turnOff() { return this.state.turnOff(); }
    turnOn() { return this.state.turnOn(); }
    getLightOnState() { return this.lightOn; }
    getLightOffState() { return this.lightOff; }
}
class LightOnState {
    constructor(newSwitch) {
        this.lightSwitch = newSwitch;
        this.name = 'LightOnState';
    }
    getState() { return this.name; }
    turnOn() { return 'Sorry the light is already on.'; }
    turnOff() {
        this.lightSwitch.setState(this.lightSwitch.getLightOffState());
        return 'Light is now off.';
    }
}
class LightOffState {
    constructor(newSwitch) {
        this.lightSwitch = newSwitch;
        this.name = 'LightOffState';
    }
    getState() { return this.name; }
    turnOn() {
        this.lightSwitch.setState(this.lightSwitch.getLightOnState());
        return 'Light is now on.';
    }
    turnOff() { return 'Sorry, light is already off.'; }
}
let lightSwitch = new LightSwitch();
lightSwitch.setState(lightSwitch.getLightOnState());
console.log(lightSwitch.getState());
console.log(lightSwitch.turnOff());
console.log(lightSwitch.getState());
console.log(lightSwitch.turnOn());
console.log(lightSwitch.getState());