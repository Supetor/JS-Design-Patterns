"use strict"

let GumballMachine = function(){
	let numOfGumballs = 1;
	let amountOfMoney = 0;

	let state;

	let hasQuarter = new HasQuarterState(this);
	let soldOut = new SoldOutState(this);
	let noQuarter = new NoQuarterState(this);

	state = noQuarter;

	this.getState = function(){
		return state.getState();
	}

	this.getNumOfGumballs = function(){
		return numOfGumballs;
	}

	this.dispenseGumball = function(){
		numOfGumballs--;
	}

	this.setGumballMachineState = function(newState){
		state = newState;
	}

	this.insertQuarter = function(){
		state.insertQuarter();
	}

	this.ejectQuarter = function(){
		state.ejectQuarter();
	}

	this.turnCrank = function(){
		//amountOfMoney += .25;
		state.turnCrank();
	}

	this.getHasQuarterState = function(){
		return hasQuarter;
	}
	this.getSoldOutState = function(){
		return soldOut;
	}
	this.getNoQuarterState = function(){
		return noQuarter;
	}
}

let HasQuarterState = function(newGumballMachine){
	let gumballMachine = newGumballMachine;
	this.name = "HasQuarterState";

	this.insertQuarter = function(){
		console.log("You can't do that, I already have a quarter.");
	}

	this.ejectQuarter = function(){
		console.log("Here is you quarter back.");
		gumballMachine.setGumballMachineState(gumballMachine.getNoQuarterState());
	}

	this.turnCrank = function(){
		console.log("Enjoy your Gumball from Mighty Gumball!");
		gumballMachine.dispenseGumball();
		if (gumballMachine.getNumOfGumballs() <= 0) {
			gumballMachine.setGumballMachineState(gumballMachine.getSoldOutState());
		} else {
			gumballMachine.setGumballMachineState(gumballMachine.getNoQuarterState());
		}
	}

	this.getState = function(){
		console.log("HasQuarterState");
	}
}

let NoQuarterState = function(newGumballMachine){
	let gumballMachine = newGumballMachine;
	this.name = NoQuarterState;

	this.insertQuarter = function(){
		console.log("Please turn crank to receive your gumball.");
		gumballMachine.setGumballMachineState(gumballMachine.getHasQuarterState());
	}

	this.ejectQuarter = function(){
		console.log("Sorry, no quarter to eject.");
	}

	this.turnCrank = function(){
		console.log("Please insert a quarter first.");	
	}

	this.getState = function(){
		console.log("NoQuarterState");
	}
}

let SoldOutState = function(newGumballMachine){
	let gumballMachine = newGumballMachine;
	this.name = SoldOutState;

	this.insertQuarter = function(){
		console.log("Sorry we're sold out, Here is your quarter back.");
	}

	this.ejectQuarter = function(){
		console.log("Sorry, we're sold out, and I don't have a quarter to eject.");
	}

	this.turnCrank = function(){
		console.log("Sorry we're sold out, and you didn't insert a quarter.");
	}

	this.getState = function(){
		console.log("SoldOutState");
	}
}

let gumballMachine = new GumballMachine();

// starts in no quarter
console.log('Let\'s Go!')
console.log('\nCommand: getState')
gumballMachine.getState();
console.log('\nCommand: ejectQuarter')
gumballMachine.ejectQuarter();
console.log('\nCommand: turnCrank')
gumballMachine.turnCrank();
console.log('\nCommand: insertQuarter')
gumballMachine.insertQuarter();

console.log('\nNext phase!---------------------------------------------------\n')

// now it's in hasQuarter
console.log('\nCommand: getState')
gumballMachine.getState();
console.log('\nCommand: insertQuarter')
gumballMachine.insertQuarter();
console.log('\nCommand: ejectQuarter')
gumballMachine.ejectQuarter();
// back to noQuarter
console.log('\nCommand: getState')
gumballMachine.getState();


console.log('\nCommand: insertQuarter')
gumballMachine.insertQuarter();
// hasQuarter
console.log('\nCommand: getState')
gumballMachine.getState();
console.log('\nCommand: turnCrank')
gumballMachine.turnCrank();

console.log('\nLast phase!---------------------------------------------------\n')

// Now it's in noQuarter (or sold out).
console.log('\nCommand: getState')
gumballMachine.getState();
console.log('\nCommand: insertQuarter')
gumballMachine.insertQuarter();
console.log('\nCommand: ejectQuarter')
gumballMachine.ejectQuarter();
console.log('\nCommand: turnCrank')
gumballMachine.turnCrank();