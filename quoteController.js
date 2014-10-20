function quoteController($scope, $http) {
	$http.get('quotes.json').then(function(res){
		$scope.quotes = res.data
		$scope.getRandom = function() {
			var index = Math.floor((Math.random() * $scope.quotes.length))
			$scope.quote = $scope.quotes[index].quote
			$scope.author = "-" + $scope.quotes[index].author
		}
		
		$scope.getRandom()
	})	
	
}