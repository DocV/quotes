function quoteController($scope) {
	$scope.quotes = [{
		quote: "first",
		author: "second"
	},
	{
		quote: "third",
		author: "fourth"
	},
	{	quote: "fifth",
		author: "sixth"
	},
	{
		quote: "seventh",
		author: "eighth"
	},
	{
		quote: "ninth",
		author: "tenth"
	}]
	
	$scope.getRandom = function() {
		var index = Math.floor((Math.random() * $scope.quotes.length))
		$scope.quote = $scope.quotes[index].quote
		$scope.author = "-" + $scope.quotes[index].author
	}
	
	$scope.getRandom()
}