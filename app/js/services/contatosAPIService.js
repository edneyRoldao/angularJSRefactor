angular.module("contatosAppModule").factory("contatosAPIService", function($http, globalVariablesApp) {
	var _getContatos = function() {
		return $http.get(globalVariablesApp.baseUrl + "/contatos");
	};

	var _saveContato = function(contato) {
		return $http.post(globalVariablesApp.baseUrl + "/contatos", contato);
	};

	var _getContato = function(id) {
		return $http.get(globalVariablesApp.baseUrl + "/contatos/" + id);
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		getContato: _getContato
	};
});

/*
	Simple example Factory Function:

	var createPet = function(name, age) {
		return {
			name: name,
			age: age
		};
	};

	var newPet = createPet("Thor", 2);
	console.log(newPet);

*/