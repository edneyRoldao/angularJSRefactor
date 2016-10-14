angular.module("contatosAppModule").controller("newContatoControlle", function($scope, $location, operadoras, contatosAPIService, serialGeneratorService) {
	$scope.app = "Novo Contato";
	$scope.operadoras = operadoras.data;

	$scope.add = function(contato) {
		contato.serial = serialGeneratorService.generate();
		contatosAPIService.saveContato(contato).success(function(data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};

});