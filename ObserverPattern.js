/*
var source = {
	observers:[],
	data:[],
	updateData:function(newData){
		data = newData;
	},
	addObserver:function(observer){
		this.observers.push(observer);
	},
	removeObserver:function(observer){
		index = this.observers.indexOf(observer)
		if(index >-1){
			this.observers.splice(index, 1);
		}
	},
	notifyObservers:function(){
		for(observer in this.observers) observers[observer].update(data);
	}
}*/

var Subject = function(){
	var observers = [];
	var data = null;
	this.updateData = function(newData){
		data = newData;
	}
	this.addObserver = function(observer){
		observers.push(observer);
	}
	this.removeObserver = function(observer){
		index = observers.indexOf(observer);
		if(index>-1){
			observers.splice(index, 1);
		}
	}
	this.notifyObservers = function(){
		for(observer in observers) observers[observer].update(data);
	}
}

var Observer = function(theSubject){
	this.theSubject = theSubject;
	this.data = null;

	this.update = function(newData){
		this.data = newData;
	}
	this.getData = function(){
		return this.data;
	}
}

var source = new Subject();
var john = new Observer(source);
source.addObserver(john);
var sally = new Observer(source);
source.addObserver(sally);

source.updateData([7,4,3])
source.notifyObservers();
console.log("John's Data: ", john.getData())
console.log("Sally's Data: ", sally.getData())

console.log("Removing Sally")
source.removeObserver(sally);

source.updateData([12,174,18])
source.notifyObservers()
console.log("John's Data: ", john.getData())
console.log("Sally's Data: ", sally.getData())