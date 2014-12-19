(function (window, angular) {
	'use strict';

	angular.module('ngLevenstein', [])
	.constant('version', '0.0.1')
	.filter('levenstein', function() {
		return function(source, transformation) {
			var transformationMatrix = [];
			source.split('');
		};
	});
})(window, window.angular);