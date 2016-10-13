angular.module("contatosAppModule").service("operadorasAPIService", function($http, globalVariablesApp) {
	this.getOperadoras = function() {
		return $http.get(globalVariablesApp.baseUrl + "/operadoras");
	};
});

/*

	Advice: every service works as a constructor function.

	Simple example Constructor fuction

	var Pet = function(name, age) {
		this.name = name;
		this.age = age;
	};

	var newPet = new Pet("Thor" 2);
	console.log(newPet);

	Now we have the same code above without modifier new:

	var newPet = {};
	Pet.call(newPet, "Thor", 2);
	console.log(newPet);

*/