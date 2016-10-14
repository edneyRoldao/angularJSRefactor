angular.module("contatosAppModule").controller("contatosController", function($scope, contatosAPIService) {
	$scope.app = "Lista Contatos";
	$scope.contatos = [];

	var carregarContatos = function() {
		contatosAPIService.getContatos().success(function(data) {
			$scope.contatos = data;					
		}).error(function(data, status) {
			$scope.contatosError = "The service contatosWS/contatos cannot be reached by application";
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
});