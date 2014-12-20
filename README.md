ngLevenstein
============

ngLevenstein is a set of filters for [Angular.js](http://angularjs.org) applications.

ngLevenstein can sort an array of strings by best matches.

#Install
You can download all files manually or install it with bower:
```
bower install ng-levenstein
```
#Usage
You need to include js/levenstein.js and add ngLevenstein as dependency to your application or module.
###Example javascript:
```
	var app = angular.module('app', ['ngLevenstein']);

	app.controller('ListCtrl', ['$scope', function($scope){
		$scope.search = '';
		$scope.list = [
			'abacist',
			'aback',
			'abactinal',
			'abacition',
			'abactor',
			'abaculus',
			'abacus',
			'pressor',
			'presspack',
			'pressurage',
			'pressure',
			'presswork'
		];
	}]);
```
###Example html (shows 5 the most matched results to the search string):
```
<form>
	<fieldset class="form-group">
		<label for="search">Search text</label>
		<input type="text" class="form-control" id="search" ng-model="search" placeholder="Search ...">
	</fieldset>
</form>
<ul>
	<li ng-repeat="word in list | orderByLevenstein:search | limitTo:5">
		{{word}} | {{word | levensteinDistance:search}}
	</li>
</ul>
```
#License
MIT Licensed

Copyright (c) 2014, Dawid Dominiak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.