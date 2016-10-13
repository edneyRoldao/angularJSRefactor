angular.module("contatosAppModule").controller("contatosController", function($scope, contatosAPIService, operadorasAPIService, serialGeneratorService) {
	$scope.app = "Contatos Application";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function() {
		contatosAPIService.getContatos().success(function(data) {
			$scope.contatos = data;					
		}).error(function(data, status) {
			$scope.contatosError = "The service contatosWS/contatos cannot be reached by application";
		});
	};

	var carregarOperadoras = function() {
		operadorasAPIService.getOperadoras().success(function(data) {
			$scope.operadoras = data;
		}).error(function(data, status) {
			$scope.operadorasError = "The service contatosWS/operadoras cannot be reached by application";
		});
	};

	$scope.add = function(contato) {
		contato.serial = serialGeneratorService.generate();
		contatosAPIService.saveContato(contato).success(function(data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();					
		});
	};

	$scope.remove = function(contatos) {
		$scope.contatos = contatos.filter( function(contato) {
			if(!contato.selected) 
				return contato;
		});
	};

	$scope.isContatoSelected = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selected;
		});
	};

	$scope.sortBy = function(field) {
		$scope.criteriaSort = field;
		$scope.changeOrder = !$scope.changeOrder;
	};

	carregarContatos();
	carregarOperadoras();
});