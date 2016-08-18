var GumballMachine = function(){
	var numOfGumballs = 100;
	var amountOfMoney = 0;

	var hasQuarter;
	var soldOut;
	var noQuarter;

	var state;

	this.getState = function(){
		state.getState;
	}

	hasQuarter = new HasQuarterState(this);
	soldOut = new SoldOutState(this);
	noQuarter = new NoQuarterState(this);

	state = noQuarter;

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
		state.insertQuarter;
	}

	this.ejectQuarter = function(){
		state.ejectQuarter();
	}

	this.turnCrank = function(){
		//amountOfMoney += .25;
		state.turnCrank;
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

var HasQuarterState = function(newGumballMachine){
	var gumballMachine = newGumballMachine;
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
		if (gumballMachine.getNumOfGumballs() == 0) {
			gumballMachine.setGumballMachineState(gumballMachine.getSoldOutState());
		} else {
			gumballMachine.setGumballMachineState(gumballMachine.getNoQuarterState());
		}
	}

	this.getState = function(){
		console.log("HasQuarterState");
	}
}

var NoQuarterState = function(newGumballMachine){
	var gumballMachine = newGumballMachine;
	this.name = NoQuarterState;

	this.insertQuarter = function(){
		console.log("Please turn crank to receive your gumball.");
		gumballMachine.setGumballMachineState(gumballMachine.getHasQuarterState());
	}

	this.ejectQuarter = function(){
		console.log("Sorry, no quarter to eject.");
	}

	this.turnCrank = function(){
		console.log("Please insert a quarter first.")	
	}

	this.getState = function(){
		console.log("NoQuarterState");
	}
}

var SoldOutState = function(newGumballMachine){
	var gumballMachine = newGumballMachine;
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

var gumballMachine = new GumballMachine();

// starts in no quarter
gumballMachine.getState();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();

// now it's in hasQuarter
gumballMachine.getState();
gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
// back to noQuarter
gumballMachine.getState();

gumballMachine.insertQuarter();
// hasQuarter
gumballMachine.getState();
gumballMachine.turnCrank();

// Now it's in noQuarter (or sold out).
gumballMachine.getState();
gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();