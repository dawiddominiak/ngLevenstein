(function (window, angular) {
	'use strict';

	function getLevensteinDistance(source, transformation) {
		var transformationMatrix = []
		  , i
		  , j
		  , sourceLength = source.length
		  , transformationLength = transformation.length;

		if(sourceLength === 0) {
			return transformationLength;
		}

		if(transformationLength === 0) {
			return sourceLength;
		}

		for(i = 0; i <= transformationLength; i++) {
			transformationMatrix[i] = [i];
		}

		for (j = 0; j <= sourceLength; j++) {
			transformationMatrix[0][j] = j;
		}

		for(i = 1; i <= transformationLength; i++) {
			for(j = 1; j <= sourceLength; j++) {
				if(transformation.charAt(i-1) == source.charAt(j-1)) {
					transformationMatrix[i][j] = transformationMatrix[i-1][j-1];
				} else {
					transformationMatrix[i][j] = Math.min(
						transformationMatrix[i-1][j-1] + 1,
						Math.min(
							transformationMatrix[i][j-1] + 1,
							transformationMatrix[i-1][j] + 1
						)
					);
				}
			}
		}
		return transformationMatrix[transformationLength][sourceLength];
	}

	angular.module('ngLevenstein', [])
	.constant('version', '0.0.1')
	.filter('levensteinDistance', function() {
		return function(source, transformation) {
			return getLevensteinDistance(source, transformation);
		};
	})
	.filter('orderByLevenstein', function() {
		return function(sortArray, search) {
			return sortArray.slice().sort(function(a, b) {
				var aDistance = getLevensteinDistance(a, search)
				  , bDistance = getLevensteinDistance(b, search);
				if(aDistance < bDistance) {
					return -1;
				} else if(aDistance > bDistance) {
					return 1;
				} else {
					return 0;
				}
			});
		};
	})
	;
})(window, window.angular);