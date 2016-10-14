angular.module("contatosAppModule").directive("accordionParentDirective", function() {
	return {
		controller: function($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function(accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function() {
				accordions.forEach(function(accordion) {
					accordion.isOpened = false;
				});
			};
		}
	};
});

angular.module("contatosAppModule").directive("accordionDirective", function() {
	return {
		templateUrl: "views/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^accordionParentDirective",
		link: function(scope, element, attrs, ctrl) {
			ctrl.registerAccordion(scope);
			scope.open = function() {
				ctrl.closeAll();
				scope.isOpened = true;
			};
		}
	};
});