var myApp = angular.module('myApp', ['ngAnimate']);



myApp.controller('myCtrl',function($scope,$http){
$scope.myMenu=true;
$scope.btnText="Open Menu";
	
	$scope.toggleMenu=function(){
		$scope.myMenu=!$scope.myMenu;
		if($scope.myMenu == true){ 	$scope.btnText="Open Menu"; }
		else { $scope.btnText="Close Menu"; }
	};

	$scope.foodNote=[];
	$scope.addItem=function(){
		$scope.errortext="";
		if(!$scope.addMe){return;}
		if($scope.foodNote.indexOf($scope.addMe) == -1){
			$scope.foodNote.push($scope.addMe);
		}else{
			$scope.errortext="Item is already in your order.";
		}
	}


	$scope.finishItem=function(){
		var foodNote= $scope.foodNote;
		$scope.orderedMenu="Thank you and we will serve your order as soon as possible. Your order is: [" + foodNote + " ]" ;

	}



	$scope.removeItem=function(x){
		$scope.errortext="";
		$scope.foodNote.splice(x,1);
	}

	$http.get('http://hidayathasan.net/projects/21/json/foods.js').success(function(data){
		$scope.foods=data;
	});


	// $scope.orderProp='price';
});


