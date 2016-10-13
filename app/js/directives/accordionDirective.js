angular.module("contatosAppModule").directive("accordionDirective", function() {
	return {
		templateUrl: "views/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		}
	};
});